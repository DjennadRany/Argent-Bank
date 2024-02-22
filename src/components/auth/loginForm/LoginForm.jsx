import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import { loginRequest, loginSuccess, loginFailure } from '../../../actions/authActions';
import { fetchUserData } from '../../../utils/api';
import './LoginForm.css';

function LoginForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utilisez useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    try {
      const userData = await fetchUserData(credentials.email, credentials.password);
      if (!userData) throw new Error('Login failed');
      localStorage.setItem('token', userData.token); // Stockez le token JWT
      dispatch(loginSuccess(userData));
      navigate('/profile'); // Redirigez vers /profile
    } catch (error) {
      dispatch(loginFailure(error.toString()));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default LoginForm;