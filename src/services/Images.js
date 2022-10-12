export const getMaxRandomImages = () => {
    return fetch('https://dog.ceo/api/breeds/image/random/10');
};