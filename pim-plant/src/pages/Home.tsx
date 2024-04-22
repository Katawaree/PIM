import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './Home.css';
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import background_home from '../pages/backgrounds/background_home.png'; 
import Carousel1 from '../pages/backgrounds/Carousel1.png'; 
import Carousel2 from '../pages/backgrounds/Carousel2.png'; 
import Carousel3 from '../pages/backgrounds/Carousel3.png'; 

const Home: React.FC = () => {

  useEffect(() => {
    
  }, []);

  return (
    <div className='Home' style={{ backgroundImage: `url(${background_home})` }}>
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
    </div>
  );
}

export default Home;

