import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../../../actions/authActions';
import './SignupForm.css';

function SignInForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    try {
      // Remplacez cette URL par l'URL de votre API d'authentification
      const response = await fetch('URL_DE_VOTRE_API/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) throw new Error('Login failed');
      const userData = await response.json();
      dispatch(loginSuccess(userData));
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

export default SignInForm;