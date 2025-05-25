import React, { useState } from "react";
import './Navigation.css';
import Auth from '../auth/Auth';
import { useAuth } from '../../context/AuthContext';

const Navigation = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentUser, isAuthenticated, logout } = useAuth();

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

    const handleLogin = () => {
        // Close the modal after login is handled by the Auth component
        setShowAuthModal(false);
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
                                    <button onClick={logout}>Logout</button>
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