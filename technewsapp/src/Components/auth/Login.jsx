import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthForm, AuthInput, AuthButton, ToggleButton, ErrorMessage } from './Auth.styles';

const Login = ({ toggleForm }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => 
        u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Login successful
        dispatch({
          type: 'LOGIN',
          payload: { name: user.name, email: user.email }
        });
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <AuthInput
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      <AuthInput
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        required
      />
      <AuthButton type="submit">Login</AuthButton>
      <ToggleButton type="button" onClick={toggleForm}>
        Need an account? Register
      </ToggleButton>
    </AuthForm>
  );
};

export default Login; 