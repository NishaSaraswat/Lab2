import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Search from './Components/search/Search';
import Pagination from './Components/pagination/Pagination';
import Stories from './Components/stories/Stories';
import AuthContainer from './Components/auth/AuthContainer';
import { AppContainer, WelcomeMessage } from './Components/styles/App.styles';

function App() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Router>
      <AppContainer>
        {isAuthenticated && (
          <WelcomeMessage>Welcome, {user?.name}!</WelcomeMessage>
        )}
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <>
                  <Search />
                  <Pagination />
                  <Stories />
                </>
              ) : (
                <Navigate to="/auth" />
              )
            } 
          />
          <Route path="/auth" element={<AuthContainer />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;