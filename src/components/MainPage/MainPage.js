import './MainPage.css';
import ImageGrid from '../ImageGrid/ImageGrid';

const MainPage = ({ data, isLoading, error }) => {

    const generateContent = () => {
        if (error) {
            return <div>{error}</div>;
        }
        return (<ImageGrid data={data} />);
    };

    return (
        <div className="main-page">
            {
                isLoading ?
                    'Loading...'
                    :
                    generateContent()
            }
        </div>
    );
};

export default MainPage;;