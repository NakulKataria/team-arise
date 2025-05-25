import React, { useState, useEffect } from 'react';
import './Auth.css';
import { useAuth } from '../../context/AuthContext';

const Auth = ({ isOpen, onClose, onLogin }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [users, setUsers] = useState([]);
  const { login } = useAuth();

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
    setSuccess('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return false;
    }

    if (!isLoginMode) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      if (!formData.name) {
        setError('Name is required');
        return false;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    if (isLoginMode) {
      // Login logic
      const user = users.find(u => u.email === formData.email);
      if (!user) {
        setError('User not found');
        return;
      }
      if (user.password !== formData.password) {
        setError('Invalid password');
        return;
      }
      setSuccess('Login successful!');
      
      // Use the login function from AuthContext
      const userData = {
        name: user.name,
        email: user.email
      };
      
      login(userData);
      
      // Close modal after successful login
      setTimeout(() => {
        onLogin();
        onClose();
      }, 1500);
    } else {
      // Signup logic
      const existingUser = users.find(u => u.email === formData.email);
      if (existingUser) {
        setError('Email already exists');
        return;
      }

      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString()
      };

      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      
      // Save to localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      setSuccess('Account created successfully! You can now log in.');
      
      // Switch to login mode after successful signup
      setTimeout(() => {
        setIsLoginMode(true);
        setFormData({
          ...formData,
          confirmPassword: ''
        });
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <div className="auth-header">
          <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLoginMode && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          
          {!isLoginMode && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
            </div>
          )}
          
          <button type="submit" className="auth-button">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </button>
        </form>
        
        <div className="auth-toggle">
          {isLoginMode ? "Don't have an account? " : "Already have an account? "}
          <button type="button" onClick={toggleMode} className="toggle-button">
            {isLoginMode ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
