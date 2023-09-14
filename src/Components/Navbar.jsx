import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './utils/GlobalContext';
import '../assets/css/Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <nav className={`navbar ${theme}`}>
      <div className={`links ${theme}`}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <button className={`toggle-button ${theme}`} onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
      </button>
    </nav>
  );
}

export default Navbar;