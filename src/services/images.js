import { baseUrl } from "../utils/constants";

export const getMaxRandomImages = () => {
    return fetch(`${baseUrl}image/random/10`);
};