import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogoutButton } from '../styles/Stories.styles';

const Logout = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
  };

  return (
    <LogoutButton onClick={handleLogout}>
      Logout
    </LogoutButton>
  );
};

export default Logout; 