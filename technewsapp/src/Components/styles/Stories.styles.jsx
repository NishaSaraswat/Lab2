import styled from 'styled-components';

export const StoriesContainer = styled.div`
  margin: 2rem auto;
  max-width: 800px;
`;

export const StoryCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  h2 {
    color: #333;
    margin-bottom: 0.5rem;
  }
`;

export const StoryInfo = styled.p`
  color: #666;
  font-size: 0.9rem;
  
  span {
    font-weight: bold;
  }
`;

export const StoryLinks = styled.div`
  margin-top: 1rem;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  
  a {
    margin-right: 1rem;
    color: #535bf2;
    background-color: #eeeeee;
    text-decoration: none;
    border-radius: 15px;
    padding: 5px 10px;
    
    &:hover {
      background-color: #48A860;
      color: #ffffff;
    }
  }
    a:last-child{
    color:red;

    &:hover {
      background-color: #ff0000;
      color: #ffffff;
    }
    }
`;
