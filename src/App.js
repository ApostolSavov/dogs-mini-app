import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import MainPage from "./components/MainPage/MainPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
