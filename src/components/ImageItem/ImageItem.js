import './ImageItem.css';

import { Link } from 'react-router-dom';

const ImageItem = ({ id, imageUrl }) => {

    return (
        <div className='image-wrapper'>
            <Link to={id}>
                <img data-id={id} src={imageUrl} alt="dog photo" className='image' />
            </Link>
        </div>
    );
};

export default ImageItem;