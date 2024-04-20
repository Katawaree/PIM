import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'
import kid_in_a_jungle_with_a_smartphone_in_hand from '../images/backgrounds/kid_in_a_jungle_with_a_smartphone_in_hand.png';


interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, for example, send data to server for authentication
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-page container" >
    <h1>Bienvenue jeune aventurier !</h1>
    <form onSubmit={handleSubmit}>
 <div className="create-account-container">
  <div className="create-account-text">Crée ton compte</div>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="e-mail"
  />
</div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="mot de passe"
          />
        </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <input type="checkbox" id="code" name="code" className="checkbox-input" />
          <label htmlFor="code" className="checkbox-label">Je continue mon aventure avec un code</label>
        </div>
        <button type="submit">COMMENCER</button>
      </form>
    </div>
  );
};

export default LoginPage;
