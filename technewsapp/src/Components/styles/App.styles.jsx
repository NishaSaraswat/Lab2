import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: "Poppines", sans-serif;
  position: relative;
`;

export const WelcomeMessage = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #646cff;
  color: white;
  border-radius: 4px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
`;
