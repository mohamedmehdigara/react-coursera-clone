import React from 'react';

const ForBusinesses = () => {
  return (
    <div className="for-businesses-page">
      <h2>Coursera for Business</h2>

      <div className="benefits">
        <h3>Make talent your competitive advantage</h3>
        <ul>
          <li>Strengthen critical skills with content you can trust</li>
          <li>Develop, retain, and advance critical talent</li>
          <li>Lower training costs without sacrificing quality</li>
          <li>Track and measure skills to demonstrate ROI</li>
        </ul>
        <p>Upskilling fewer than 125 employees? Get Coursera for Teams</p>
      </div>

      <div className="impact">
        <h3>Leaders at 3,800+ companies develop their talent with Coursera</h3>
        <div className="company-logos">
          {/* Add company logos here */}
        </div>
      </div>

      <div className="strengthen-skills">
        <h3>UPSKILL EMPLOYEES</h3>
        <p>Strengthen critical skills across every team</p>
        <ul>
          <li>Increase business impact and agility with in-demand tech, data, and leadership skills.</li>
          <li>Use role-based assessments to identify skills gaps and advancement opportunities</li>
          <li>Advance skills in roles that drive rapid transformation for your company</li>
          <li>Enhance leadership skills to engage, navigate, and motivate employees amid change</li>
          <li>Learn and apply skills faster with hands-on projects and immersive learning</li>
        </ul>
        <p>What I’ve learned through Coursera allows me to better guide and inform the professional data analysts on my team to solve tough business problems and accelerate the development of our digital capabilities.</p>
        <p>- Sabine M., Research Fellow, Procter & Gamble</p>
      </div>

      <div className="world-class-content">
        <h3>WORLD-CLASS CONTENT</h3>
        <p>Learn from the best</p>
        <ul>
          <li>Lower training costs with in-demand content and trusted credentials from 300+ top companies and universities.</li>
          <li>Provide expert instruction from 13 of the top 20 business schools in the world</li>
          <li>Prepare employees for digital roles with career credentials from industry experts</li>
          <li>Drive continuous learning with short videos, lessons, and hands-on projects</li>
          <li>Curate your own content experiences or leverage our job-aligned collections</li>
        </ul>
        {/* Add university logos here */}
        <p>Search our catalog of world-class content</p>
        <p>e.g. Data Science</p>
      </div>

      <div className="show-roi">
        <h3>SHOW ROI</h3>
        <p>Demonstrate the value of learning</p>
        <ul>
          <li>Use comprehensive metrics and insights to inform, measure, and assess your talent development strategy impact.</li>
          <li>Track real-time skill development and learning activity of everyone in your company</li>
          <li>Gain industry-specific insights to understand the fast-changing skills landscape</li>
          <li>See every employee’s proficiency in 117+ technology, data, and business skills</li>
          <li>Evaluate your skills against industry benchmarks using verified performance data</li>
        </ul>
        <p>With knowledge sharing and continued learning, we can increase productivity and keep delivering excellent client services that support our revenue goals.</p>
        <p>- Manpreet S., Chief Digital Officer, PwC India</p>
      </div>

      <div className="retain-talent">
        <h3>RETAIN TALENT</h3>
        <p>Develop, retain, and advance your talent</p>
        <p>Be the company people want to join, stay at, and find their next move with.</p>
        <p>Provide high-quality career development, from entry-level to C-suite roles</p>
        <p>Use verified skill performance data to identify potential candidates for open roles</p>
        <p>Retrain employees whose roles are impacted by emerging technologies</p>
        <p>Training like this allows us to attract, develop, and retain the top talent that helps Adobe maintain its reputation as a technology leader.</p>
        <p>- Tim C., Senior Director of Applied Machine Learning, Adobe</p>
      </div>
    </div>
  );
};

export default ForBusinesses;
