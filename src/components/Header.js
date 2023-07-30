import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
            <a href="#">For Universities</a>
            <a href="#">For Governments</a>
            <a href="#">Skip to Main Content</a>
          </div>
        </div>
        <div className="header-right">
          <button className="explore-button">Explore</button>
          <div className="dropdown-content">
            <div className="goals-submenu">
              <p>Goals</p>
              <ul>
                <li>Take a free course</li>
                <li>Earn a Degree</li>
                <li>Earn a Certificate</li>
                <li>Find your new career</li>
              </ul>
            </div>
            <div className="subjects-submenu">
              <p>Subjects</p>
              <ul>
                <li>Data Science</li>
                <li>Business</li>
                <li>Computer Science</li>
                <li>Information Technology</li>
                <li>Language Learning</li>
                <li>Health</li>
                <li>Personal Development</li>
                <li>Physical Science and Engineering</li>
                <li>Social Sciences</li>
                <li>Arts and Humanities</li>
                <li>Math and Logic</li>
              </ul>
            </div>
          </div>
          <span className="username">Mohamed Mehdi Gara</span>
          <div className="user-menu">
            <a href="#">Welcome back!</a>
            <a href="#">Tell us about yourself</a>
            <a href="#">I am currently an MBA graduate</a>
            <a href="#">Updating your recommendations</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
