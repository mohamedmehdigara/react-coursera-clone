import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Coursera</h1>
          <p>Learn new skills, pursue your interests, advance your career.</p>
          <Link to="/example-page">
        <button>Get Started</button>
      </Link>
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="course-list">
          {/* Render featured courses dynamically */}
          <div className="course-card">
            <img src="course1.jpg" alt="Course 1" />
            <h3>Introduction to Data Science</h3>
            <p>This course provides an overview of data science...</p>
          </div>
          <div className="course-card">
            <img src="course2.jpg" alt="Course 2" />
            <h3>Web Development for Beginners</h3>
            <p>Learn HTML, CSS, and JavaScript to build websites...</p>
          </div>
          {/* Add more course cards */}
        </div>
      </section>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial-list">
          {/* Render testimonials dynamically */}
          <div className="testimonial">
            <p>"Coursera has transformed my life. I never thought I could learn so much online!"</p>
            <p className="author">- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"The courses on Coursera are top-notch. I highly recommend it to anyone looking to advance their career."</p>
            <p className="author">- Jane Smith</p>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>
    </div>
  );
};

export default Home;
