import React, { useState, useEffect } from "react";
import './Navigation.css';
import Auth from '../auth/Auth';

const Navigation = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Check if user is already logged in with explicit authentication flag
        const storedUser = localStorage.getItem('currentUser');
        const authFlag = localStorage.getItem('isAuthenticated');
        
        if (storedUser && authFlag === 'true') {
            setCurrentUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        const menuItems = document.getElementById('menuitems');
        if (menuItems) {
            menuItems.classList.toggle('toggleMenu');
        }
    };

    const handleOpenAuthModal = () => {
        setShowAuthModal(true);
    };

    const handleCloseAuthModal = () => {
        setShowAuthModal(false);
    };

    const handleLogin = (user) => {
        setCurrentUser(user);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        // Clear all authentication data
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isAuthenticated');
        setCurrentUser(null);
        setIsAuthenticated(false);
    };

    return (
        <React.Fragment>
            <div className="cross-icon" onClick={toggleMenu}>
                <div className="line-1 line"></div>
                <div className="line-2 line"></div>
            </div>

            <ul className="menubar">
                <li id="logo">
                    <a href="#Home" className="menu-link" title='logo'>Arise.ai</a>
                </li>
                <li id="menuitems">
                    <ul id="menuitems-list">
                        <li className="items" >
                            <a className="menu-link" href="#Home">Home</a>
                        </li>
                        <li className="items" >
                            <a className="menu-link" href="#stats">Stats</a>
                        </li>
                        <li className="items" >
                            <a className="menu-link" href="#Brief">Brief</a>
                        </li>
                        
                        <li className="items" >
                            <a className="menu-link" href="#AboutUs">AboutUs</a>
                        </li>
                        <li id="login-menu-btn">
                            {currentUser ? (
                                <div className="user-profile">
                                    <span className="user-name">Hi, {currentUser.name}</span>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            ) : (
                                <button onClick={handleOpenAuthModal}>Signup/Login</button>
                            )}
                        </li>

        
                    </ul>
                </li>
            </ul>
            
            {/* Auth Modal */}
            {showAuthModal && (
                <Auth 
                    isOpen={showAuthModal} 
                    onClose={handleCloseAuthModal} 
                    onLogin={handleLogin} 
                />
            )}
        </React.Fragment>
    );
}

export default Navigation;