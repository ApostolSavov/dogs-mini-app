export const imageIdGetter = (imageUrl) => {
    const imgUrlSegments = imageUrl.split('/');
    const imgId = imgUrlSegments[imgUrlSegments.length - 1].split('.')[0];
    return imgId;
};