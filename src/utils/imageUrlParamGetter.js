export const imageUrlParamGetter = (imageUrl) => {
    const imgUrlSegments = imageUrl.split('/');
    const imgUrlParam = imgUrlSegments.slice(-2).join('/');
    return imgUrlParam;
};