// Gallery 폴더 이미지 로더 (갤러리·전후 비교 공통)
const galleryCtx = require.context('../assets/images/Gallery', false, /\.jpe?g$/);

export const galleryImg = (name) => galleryCtx(`./${name}.jpeg`);
