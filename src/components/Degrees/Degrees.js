import React from 'react';
import './Degrees.css'; // Import the associated CSS file

function Degrees() {
  return (
    <div className="degrees-container">
      <h1>Degrees</h1>
      <div className="degree-card">
        <h2>Bachelor of Science in Computer Science</h2>
        <p>This degree program provides a comprehensive education in computer science principles and practical skills.</p>
        <p>Degree Duration: 4 years</p>
      </div>
      <div className="degree-card">
        <h2>Master of Business Administration (MBA)</h2>
        <p>Our MBA program offers a broad business education with a focus on leadership, management, and strategy.</p>
        <p>Degree Duration: 2 years</p>
      </div>
      {/* Add more degree cards as needed */}
    </div>
  );
}

export default Degrees;
