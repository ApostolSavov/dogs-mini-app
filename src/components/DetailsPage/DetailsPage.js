import { useParams, useNavigate } from 'react-router-dom';
import './DetailsPage.css';

import { baseImageUrl } from '../../utils/constants';
import { useEffect } from 'react';

const DetailsPage = ({ onDelete, data, isLoading, error }) => {
    const { id, breed } = useParams();
    const navigate = useNavigate();

    const onClickHandler = () => {
        onDelete(id);
        navigate('/');
    };

    useEffect(() => {
        if (!data.some((imageUrl) => imageUrl.includes(id))) {
            navigate('/', { 'replace': true });
        }
    }, []);

    if (error) {
        return <div>Please retry or go back to the main page: {error}</div>;
    }

    return (
        isLoading ?
            'Loading...'
            :
            <div className='details-wrapper'>
                <div className='big-image-wrapper'>
                    <img src={`${baseImageUrl}${breed}/${id}`} alt="dog photo" className='big-image' />
                    <h2>This dog is a {breed}</h2>
                    <button className='delete-button' onClick={onClickHandler}> Delete </button>
                </div>
            </div>
    );
};

export default DetailsPage;