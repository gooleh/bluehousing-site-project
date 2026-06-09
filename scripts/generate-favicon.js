#!/usr/bin/env node
'use strict';

/**
 * Generates apple-touch-icon.png and favicon.ico from the SVG favicon shapes.
 * Pure Node.js / zlib — no external dependencies.
 *
 * SVG source (public/favicon.svg):
 *   viewBox="0 0 100 100"
 *   bg: rect 0 0 100 100 rx=20 fill=#1a345c
 *   left wing:  M50 13 L13 57 L36 57 L50 40 Z  fill=#aec8ea
 *   right wing: M50 13 L87 57 L64 57 L50 40 Z  fill=#4f82c7
 *   base bar:   rect x=13 y=62 w=74 h=11 rx=3  fill=#7ea7db
 */

const fs   = require('fs');
const path = require('path');
const zlib = require('zlib');

const PUBLIC = path.join(__dirname, '..', 'public');

// ---- CRC32 ----
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function makeChunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4); lenBuf.writeUInt32BE(data.length);
  const crcBuf = Buffer.alloc(4); crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([lenBuf, t, data, crcBuf]);
}

// ---- Pixel canvas (RGBA) ----
function makeCanvas(w, h, r, g, b, a) {
  const buf = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    buf[i*4]=r; buf[i*4+1]=g; buf[i*4+2]=b; buf[i*4+3]=a;
  }
  return buf;
}
function setPixel(buf, w, x, y, r, g, b) {
  if (x < 0 || y < 0 || x >= w || y >= Math.floor(buf.length / (w * 4))) return;
  const d = (y * w + x) * 4;
  buf[d]=r; buf[d+1]=g; buf[d+2]=b; buf[d+3]=255;
}
function blendPixel(buf, w, x, y, r, g, b, alpha) {
  if (x < 0 || y < 0 || x >= w) return;
  const d = (y * w + x) * 4;
  const a = alpha / 255;
  buf[d]   = Math.round(r * a + buf[d]   * (1-a));
  buf[d+1] = Math.round(g * a + buf[d+1] * (1-a));
  buf[d+2] = Math.round(b * a + buf[d+2] * (1-a));
  buf[d+3] = 255;
}

// ---- Polygon fill (scanline) ----
function fillPolygon(buf, canvasW, canvasH, pts, r, g, b) {
  const n = pts.length;
  for (let y = 0; y < canvasH; y++) {
    const xs = [];
    for (let i = 0; i < n; i++) {
      const [x0, y0] = pts[i], [x1, y1] = pts[(i+1)%n];
      if ((y0 <= y && y1 > y) || (y1 <= y && y0 > y)) {
        xs.push(x0 + (y - y0) * (x1 - x0) / (y1 - y0));
      }
    }
    xs.sort((a, b) => a - b);
    for (let i = 0; i < xs.length; i += 2) {
      const xStart = Math.round(xs[i]), xEnd = Math.round(xs[i+1] ?? xs[i]);
      for (let x = xStart; x <= xEnd; x++) setPixel(buf, canvasW, x, y, r, g, b);
    }
  }
}

// ---- Rectangle fill (with optional rounded corners via distance) ----
function fillRect(buf, canvasW, canvasH, rx, ry, rw, rh, cornerR, r, g, b) {
  const x0 = Math.round(rx), y0 = Math.round(ry);
  const x1 = Math.round(rx + rw), y1 = Math.round(ry + rh);
  for (let y = y0; y < Math.min(y1, canvasH); y++) {
    for (let x = x0; x < Math.min(x1, canvasW); x++) {
      if (cornerR > 0) {
        // check corners
        const dx = Math.max(0, Math.max(x0 + cornerR - x, x - (x1 - cornerR)));
        const dy = Math.max(0, Math.max(y0 + cornerR - y, y - (y1 - cornerR)));
        if (dx*dx + dy*dy > cornerR*cornerR) continue;
      }
      setPixel(buf, canvasW, x, y, r, g, b);
    }
  }
}

// ---- Rounded background rect (for ICO) ----
function fillRoundedRect(buf, canvasW, canvasH, cx, cy, cw, ch, cornerR, r, g, b) {
  fillRect(buf, canvasW, canvasH, cx, cy, cw, ch, cornerR, r, g, b);
}

// ---- Render house icon onto pixel buffer ----
function renderIcon(buf, size) {
  const S = size / 100; // scale factor (SVG is 100×100)

  // SVG colors
  const NAV  = [26, 52, 92];    // #1a345c  navy bg
  const LWNG = [174, 200, 234]; // #aec8ea  left wing (lighter)
  const RWNG = [79, 130, 199];  // #4f82c7  right wing (darker)
  const BASE = [126, 167, 219]; // #7ea7db  base bar

  // Left wing: M50 13 L13 57 L36 57 L50 40 Z
  fillPolygon(buf, size, size, [
    [50*S, 13*S], [13*S, 57*S], [36*S, 57*S], [50*S, 40*S]
  ], ...LWNG);

  // Right wing: M50 13 L87 57 L64 57 L50 40 Z
  fillPolygon(buf, size, size, [
    [50*S, 13*S], [87*S, 57*S], [64*S, 57*S], [50*S, 40*S]
  ], ...RWNG);

  // Base bar: x=13 y=62 w=74 h=11 rx=3
  fillRect(buf, size, size, 13*S, 62*S, 74*S, 11*S, 3*S, ...BASE);
}

// ---- PNG encoder ----
function encodePng(pixels, w, h) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8]=8; ihdr[9]=6; // 8-bit RGBA

  const rows = [];
  for (let y = 0; y < h; y++) {
    const row = Buffer.alloc(1 + w * 4);
    row[0] = 0; // filter None
    for (let x = 0; x < w; x++) {
      const s = (y*w+x)*4, d = 1+x*4;
      row[d]=pixels[s]; row[d+1]=pixels[s+1]; row[d+2]=pixels[s+2]; row[d+3]=pixels[s+3];
    }
    rows.push(row);
  }

  const idat = zlib.deflateSync(Buffer.concat(rows), { level: 9 });
  const sig = Buffer.from([137,80,78,71,13,10,26,10]);
  return Buffer.concat([sig, makeChunk('IHDR', ihdr), makeChunk('IDAT', idat), makeChunk('IEND', Buffer.alloc(0))]);
}

// ---- ICO encoder (embeds PNGs) ----
function createIco(entries) {
  const DIR=6, ENTRY=16;
  const hdrSize = DIR + ENTRY * entries.length;
  let offset = hdrSize;
  const offsets = entries.map(e => { const o = offset; offset += e.png.length; return o; });

  const hdr = Buffer.alloc(DIR);
  hdr.writeUInt16LE(0,0); hdr.writeUInt16LE(1,2); hdr.writeUInt16LE(entries.length,4);

  const dirs = entries.map((e, i) => {
    const b = Buffer.alloc(ENTRY);
    b[0] = e.size >= 256 ? 0 : e.size;
    b[1] = e.size >= 256 ? 0 : e.size;
    b.writeUInt16LE(1,4); b.writeUInt16LE(32,6);
    b.writeUInt32LE(e.png.length,8); b.writeUInt32LE(offsets[i],12);
    return b;
  });

  return Buffer.concat([hdr, ...dirs, ...entries.map(e => e.png)]);
}

// ---- Main ----
function main() {
  // 1. apple-touch-icon.png — 180×180, navy background, house icon
  {
    const sz = 180;
    // Fill navy background (solid, no rounded corners — iOS clips automatically)
    const buf = makeCanvas(sz, sz, 26, 52, 92, 255);
    renderIcon(buf, sz);
    const png = encodePng(buf, sz, sz);
    fs.writeFileSync(path.join(PUBLIC, 'apple-touch-icon.png'), png);
    console.log('  ✓ apple-touch-icon.png (180×180, navy bg)');
  }

  // 2. favicon.ico — 48×48, 32×32, 16×16, navy background
  {
    const icoSizes = [48, 32, 16];
    const entries = icoSizes.map(sz => {
      const buf = makeCanvas(sz, sz, 26, 52, 92, 255);
      renderIcon(buf, sz);
      return { size: sz, png: encodePng(buf, sz, sz) };
    });
    const ico = createIco(entries);
    fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), ico);
    console.log('  ✓ favicon.ico (48×48, 32×32, 16×16, navy bg)');
  }
}

main();
