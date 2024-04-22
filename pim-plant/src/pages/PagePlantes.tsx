import React, { useEffect, useState } from 'react'
import backgroundPlantImage from './backgrounds/backgroundPlantPage.png'
import './PagePlantes.css'
import { useParams } from 'react-router-dom';
import { stringify } from 'querystring';

const PagePlantes = () => {
  
  const { id } = useParams();
  const { latin_name } = useParams();
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/routes/user-plants/${id} ${latin_name}`)
      .then(res => res.json())
      .then(data => setPlantData(data))
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching plant data:', error));
  }, [latin_name]);


  return (
    <>
    {plantData && (
        <div className="PlantContainer">
            <p>Nom de la plante : {latin_name}</p>
            <p>Détails de la plante : {latin_name}</p>
            <p>{id}</p>
          </div>
      )};
    </> 
  )
}

export default PagePlantes