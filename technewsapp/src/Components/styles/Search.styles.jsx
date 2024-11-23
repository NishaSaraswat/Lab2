import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  width: 300px;
  border: 2px solid #646cff;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #535bf2;
  }
`;
