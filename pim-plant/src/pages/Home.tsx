import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import DailyStreak from '../components/dailystreak';
import './Home.css';
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import background_home from '../pages/backgrounds/background_home.png'; 
import Carousel1 from '../pages/backgrounds/Carousel1.png'; 
import Carousel2 from '../pages/backgrounds/Carousel2.png'; 
import Carousel3 from '../pages/backgrounds/Carousel3.png'; 
import top_image from '../pages/backgrounds/Frame 251.png'; 

const Home: React.FC = () => {

  useEffect(() => {
    
  }, []);

  return (
    <div className='Home' style={{ backgroundImage: `url(${background_home})` }}>
         <div className="top-image-container" style={{ position: 'relative' }}>
        <img src={top_image} alt="Top Image" className="top-image" />
        <div className="daily-streak">
          <DailyStreak />
        </div>
      </div>
      <div className="carousel-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', marginTop: '300px' }}> {}
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img src={Carousel1} alt="Carousel" />
          </div>
          <div>
            <img src={Carousel2} alt="Carousel2" />
          </div>
          <div>
            <img src={Carousel3} alt="Carousel3" />
          </div>

        </Carousel>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '-40px', marginLeft: '-100px',color: 'black' }}>Plantes Légendaires</h2>
      <div className="map-container" style={{ textAlign: 'center', marginTop: '50px', width: 'calc(100% - 40px)', marginLeft: '20px', marginRight: '20px' }}>
        <iframe src="https://www.google.com/maps/embed?mid=1IEC4YNpWO9-lmLuDiGnHYMCjCojprpU&output=embed" width="100%" height="250" style={{ border: 'none' }}></iframe> {}
      </div>
    </div>
  );
}

export default Home;

