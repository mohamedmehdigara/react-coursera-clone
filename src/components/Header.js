import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Coursera</a>
      </div>
      <nav className="nav-links">
        <Link to="/for-individuals">For Individuals</Link>
        <Link to="/for-businesses">For Businesses</Link>
        <a href="/">For Universities</a>
        <a href="/">For Governments</a>
        <a href="/">Skip to Main Content</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="What do you want to learn?" />
        <button>Explore</button>
      </div>
      <div className="user-section">
        <a href="/">Find your New Career</a>
        <div className="user-profile">
          <img
            src="https://example.com/path-to-your-image"
            alt="User Profile"
          />
          <span>John Doe</span>
        </div>
        <div className="user-actions">
          <a href="/">Welcome back!</a>
          <a href="/">Tell us about yourself</a>
          <span>I am currently an MBA graduate</span>
        </div>
        <div className="learning-goal">
          <a href="/">Updating your recommendations</a>
          <span>Home In Progress Completed</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
