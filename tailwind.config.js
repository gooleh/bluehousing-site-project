// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          'Pretendard Variable',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          'sans-serif',
        ],
        serif: ['"Noto Serif KR"', 'serif'],
      },
      colors: {
        // 브랜드 메인 — 깊이 있는 네이비 블루
        brand: {
          50: '#eef4fb',
          100: '#d6e4f5',
          200: '#aec8ea',
          300: '#7ea7db',
          400: '#4f82c7',
          500: '#2f63ad',
          600: '#234d8c',
          700: '#1d3f72',
          800: '#1a345c',
          900: '#162a49',
          950: '#0f1c33',
        },
        // 포인트 — 따뜻한 골드/브라운 (기존 #B08D57 계열 정리)
        accent: {
          50: '#faf6ef',
          100: '#f1e6d3',
          200: '#e3cba6',
          300: '#d3ac76',
          400: '#c69553',
          500: '#b08d57',
          600: '#9a7544',
          700: '#7d5d39',
          800: '#674c33',
          900: '#56402d',
        },
        ink: {
          DEFAULT: '#1a1d23',
          soft: '#3f444d',
          muted: '#6b7280',
        },
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(16, 28, 51, 0.08), 0 4px 16px -4px rgba(16, 28, 51, 0.06)',
        card: '0 4px 24px -6px rgba(16, 28, 51, 0.12)',
        'card-hover': '0 16px 40px -12px rgba(16, 28, 51, 0.22)',
        header: '0 4px 20px -8px rgba(16, 28, 51, 0.25)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      maxWidth: {
        content: '72rem',
      },
      letterSpacing: {
        tightish: '-0.01em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'kenburns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 1s ease both',
        'kenburns': 'kenburns 7s ease-out both',
      },
    },
  },
  plugins: [],
}
