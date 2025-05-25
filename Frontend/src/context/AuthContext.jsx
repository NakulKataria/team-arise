import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('currentUser');
    const authFlag = localStorage.getItem('isAuthenticated');
    
    if (storedUser && authFlag === 'true') {
      setCurrentUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    // Store current user in localStorage with explicit authentication flag
    const authenticatedUser = {
      ...userData,
      isLoggedIn: true,
      isAuthenticated: true
    };
    
    localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
    localStorage.setItem('isAuthenticated', 'true');
    
    setCurrentUser(authenticatedUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Clear all authentication data
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAuthenticated');
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const authContextValue = {
    currentUser,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
