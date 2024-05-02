import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isUserMenuVisible, setUserMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuVisible(!isUserMenuVisible);
  };

  return (
    <header>
      <div className="container">
        <div className="header-left">
          <img
            src="https://www.coursera.org/images/coursera-logo-plain.svg"
            alt="Coursera Logo"
          />
          <div className="header-links">
            <Link to="/for-individuals">For Individuals</Link>
            <Link to="/for-businesses">For Businesses</Link>
            <Link to="/for-universities">For Universities</Link>
            <Link to="/for-governments">For Governments</Link>
          </div>
        </div>
        <div className="header-right">
          <span
            className="username"
            onMouseEnter={toggleUserMenu}
            onMouseLeave={toggleUserMenu}
          >
            Mohamed Mehdi Gara
          </span>
          {isUserMenuVisible && (
            <div className="user-menu">
              <a href="#">Welcome back!</a>
              <a href="#">Tell us about yourself</a>
              <a href="#">I am currently an MBA graduate</a>
              <a href="#">Updating your recommendations</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
