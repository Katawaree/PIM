import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from './Home'

const LoginPage: React.FC = () => {

  useEffect(() => {
    //fetch("url backend")
    //.then((res) => res.json())
    //.then(data => console.log(data))
  }, []);
  return (
    <div className='Home'>
      <h1>Home</h1>
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

export default LoginPage;
