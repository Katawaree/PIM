import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

export default LoginPage;
