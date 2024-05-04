import React, { useState } from 'react';
import "./EnrollmentPage.css";

function EnrollmentPage() {
  // Define state variables for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [courseName, setCourseName] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', { fullName, email, courseName });
    // Reset form fields
    setFullName('');
    setEmail('');
    setCourseName('');
  };

  return (
    <div className="enrollment-page">
      <h1>Enrollment Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default EnrollmentPage;
