import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

const AuthContainer = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      {showLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Registration toggleForm={toggleForm} />
      )}
    </>
  );
};

export default AuthContainer; 