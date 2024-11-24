import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthForm, AuthInput, AuthButton, ToggleButton, ErrorMessage } from './Auth.styles';

const Registration = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Store user data in localStorage without logging in
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      localStorage.setItem('users', JSON.stringify(users));

      // Show success message (optional)
      alert('Registration successful! Please login.');
      
      // Redirect to login form
      toggleForm();
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <h2>Register</h2>
      <AuthInput
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
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
      <AuthButton type="submit">Register</AuthButton>
      <ToggleButton type="button" onClick={toggleForm}>
        Already have an account? Login
      </ToggleButton>
    </AuthForm>
  );
};

export default Registration; 