import { useParams, Navigate } from 'react-router-dom';
import './DetailsPage.css';

import { baseImageUrl } from '../../utils/constants';

const DetailsPage = ({ onDelete }) => {
    const { id, breed } = useParams();

    return (
        <div className='details-wrapper'>
            <div className='big-image-wrapper'>
                <img src={`${baseImageUrl}${breed}/${id}`} alt="dog photo" className='big-image' />
                <h2>This dog is a {breed}</h2>
                <button className='delete-button' onClick={() => onDelete()}> Delete </button>
            </div>
        </div>
    );
};

export default DetailsPage;