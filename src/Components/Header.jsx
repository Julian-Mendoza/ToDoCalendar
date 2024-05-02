import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import '../Styles/Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">J&JMendoza</div>
        <button className="hamburger" onClick={toggleMenu}>
          Menu
        </button>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/login">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              {isLoggedIn ? (
                <Logout />
              ) : (
                <button className="login-button" onClick={handleLoginClick}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;