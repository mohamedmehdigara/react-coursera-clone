import React, {useState} from 'react';
import "./ForIndividuals.css";
import Navbar from '../Navbar/Navbar';


const ForIndividuals = () => {
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleExploreDropdown = () => {
    setShowExploreDropdown((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setShowUserMenu((prev) => !prev);
  };

  return (
    <main className="main">
      <div className="header-right">
          <button
            className="explore-button"
            onMouseEnter={toggleExploreDropdown}
            onMouseLeave={toggleExploreDropdown}
          >
            Explore
          </button>
          <div className={`dropdown-content ${showExploreDropdown ? 'show' : ''}`}>
            <div className="goals-submenu">
              <p>Goals</p>
              <ul>
                <li>Take a free course</li>
                <Navbar /> {/* Render the Navbar component */}

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
          </div>
      <section className="earn-degree">
        <h2>Earn Your Degree</h2>
        <div className="degree-card">
          <h3>University of North Texas</h3>
          <p>Bachelor of Applied Arts and Sciences</p>
          <button>Earn a degree</button>
        </div>
        {/* Add more degree cards here */}
      </section>

      <section className="popular-certificates">
        <h2>Most Popular Certificates</h2>
        <div className="certificate-card">
          <h3>Google Data Analytics</h3>
          <p>Professional Certificate</p>
        </div>
        {/* Add more certificate cards here */}
      </section>

      <section className="recently-viewed">
        <h2>Recently Viewed Courses and Specializations</h2>
        <div className="viewed-card">
          <h3>Build AI Apps with ChatGPT, Dall-E, and GPT-4</h3>
          <p>Course</p>
        </div>
        {/* Add more recently viewed cards here */}
      </section>

      <section className="coursera-plus">
        <h2>Explore with a Coursera Plus Subscription</h2>
        <div className="coursera-plus-course">
          <p>Status: Free</p>
          <h3>Utrecht University</h3>
          <p>Understanding child development: from synapse to society</p>
          <p>Course</p>
        </div>
        {/* Add more Coursera Plus courses here */}
      </section>

      {/* Add more sections here */}
    </main>
  );
};

export default ForIndividuals;
