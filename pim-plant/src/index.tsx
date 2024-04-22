import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage';
import PageCollection from './pages/PageCollection';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom"
import Layout from './layouts/Layout';
import PagePhoto from './pages/PagePhoto';

function PlantPage() {
  const {id} = useParams();
  const [plantData, setPlantData] = useState(undefined);

  useEffect(() => {
    console.log(id);
    fetch("").then(res => res.json()).then(plant => setPlantData(plant));
  }, [id]);
  return <p>{id}</p>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
       <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<App/>} />
          <Route path="/pagecollection" element={<PageCollection/>} />
          <Route path="/home" element={<Home/>} />
          <Route path='/plant/:id' element={<PlantPage/>} />
        </Route>
        <Route path="/loginpage" element={<LoginPage/>} />
        <Route path="/pagephoto" element={<PagePhoto/>} />

      </Routes>
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
