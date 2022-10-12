import './ImageGrid.css';

import ImageItem from '../ImageItem/ImageItem';
import { imageUrlParamGetter } from '../../utils/imageUrlParamGetter';

const ImageGrid = ({ data }) => {

    return (
        <div className='grid'>
            {
                data.map((imageUrl) => {
                    const imageUrlParam = imageUrlParamGetter(imageUrl);

                    return <ImageItem key={imageUrl} urlParam={imageUrlParam} imageUrl={imageUrl} />;
                })
            }
        </div>
    );
};

export default ImageGrid;