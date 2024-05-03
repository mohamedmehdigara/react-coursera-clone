import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          Coursera
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/degrees">Degrees</Link>
          </li>
          <li>
            <Link to="/for-enterprise">For Enterprise</Link>
          </li>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Search courses" />
          <button type="submit">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
