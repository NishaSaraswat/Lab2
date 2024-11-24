import styled from 'styled-components';

export const AuthForm = styled.form`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #646cff;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #535bf2;
  }
`;

export const ToggleButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: transparent;
  color: #646cff;
  border: 1px solid #646cff;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4444;
  text-align: center;
  margin-bottom: 1rem;
`; 