import React from 'react';
import "./ForEntreprise.css";

function ForEntreprise() {
  return (
    <div className="enterprise-container">
      <h1>For Enterprise</h1>
      <p>Welcome to Coursera for Enterprise!</p>
      <p>Here you can find tailored solutions to meet the learning needs of your organization.</p>
      <div className="benefits">
        <h2>Benefits of Coursera for Enterprise</h2>
        <ul>
          <li>Access to a vast library of courses and specializations</li>
          <li>Customized learning paths for your employees</li>
          <li>Flexible pricing options to suit your budget</li>
          <li>Advanced analytics to track progress and measure ROI</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>If you're interested in learning more about Coursera for Enterprise, feel free to contact us:</p>
        <ul>
          <li>Email: enterprise@coursera.com</li>
          <li>Phone: 1-800-123-4567</li>
        </ul>
      </div>
    </div>
  );
}

export default ForEntreprise;
