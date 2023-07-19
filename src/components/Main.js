import React from 'react';

const Main = () => {
  return (
    <main className="main">
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

export default Main;
