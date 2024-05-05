import React, { useState } from 'react';
import "./EnrollmentPage.css";

function EnrollmentPage() {
  // Define state variables for form inputs and errors
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [courseName, setCourseName] = useState('');
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!courseName.trim()) {
      errors.courseName = 'Course Name is required';
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', { fullName, email, courseName });

    // Reset form fields and errors
    setFullName('');
    setEmail('');
    setCourseName('');
    setErrors({});
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
          {errors.fullName && <p className="error">{errors.fullName}</p>}
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
          {errors.email && <p className="error">{errors.email}</p>}
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
          {errors.courseName && <p className="error">{errors.courseName}</p>}
        </div>
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default EnrollmentPage;
