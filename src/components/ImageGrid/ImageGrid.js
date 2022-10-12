import './ImageGrid.css';

import ImageItem from '../ImageItem/ImageItem';
import { imageIdGetter } from '../../utils/imageIdGetter';

const ImageGrid = ({ data }) => {

    return (
        <div className='grid'>
            {
                data.map((imageUrl) => {
                    const imageId = imageIdGetter(imageUrl);

                    return <ImageItem key={imageId} id={imageId} imageUrl={imageUrl} />;
                })
            }
        </div>
    );
};

export default ImageGrid;