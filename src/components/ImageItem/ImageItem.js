import './ImageItem.css';

import { Link } from 'react-router-dom';

const ImageItem = ({ urlParam, imageUrl }) => {

    return (
        <div className='image-wrapper'>
            <Link to={urlParam}>
                <img src={imageUrl} alt="dog photo" className='image' />
            </Link>
        </div>
    );
};

export default ImageItem;