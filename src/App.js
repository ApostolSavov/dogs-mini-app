import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMaxRandomImages } from './services/images';

import './App.css';
import MainPage from "./components/MainPage/MainPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDelete = (imageId) => {
    const freshData = data.filter((imageUrl) => !imageUrl.includes(imageId));
    setData(freshData);
  };

  useEffect(() => {
    getMaxRandomImages()
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

  }, []);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage data={data} isLoading={isLoading} error={error} />} />
        <Route exact path="/:breed/:id" element={<DetailsPage data={data} isLoading={isLoading} error={error} onDelete={onDelete} />} />
      </Routes>
    </Router>
  );
}

export default App;
