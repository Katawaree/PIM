import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './Home.css';
import { Carousel } from 'react-responsive-carousel'; // Import du Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import des styles du Carousel
import background_home from '../images/backgrounds/background_home.png';

const Home: React.FC = () => {

  useEffect(() => {
    //fetch("url backend")
    //.then((res) => res.json())
    //.then(data => console.log(data))
  }, []);

  return (
    <div className='Home' style={{ backgroundImage: `url(${background_home})` }}>
      <h1>Home</h1>
      <Link to="/home">Go to Home</Link>

      <div className="carousel-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', padding: '10px', marginTop: '300px' }}> {/* Container pour le carousel */}
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img src="image1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="image2.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="image3.jpg" alt="Image 3" />
          </div>
          <div>
            <img src="image4.jpg" alt="Image 4" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

