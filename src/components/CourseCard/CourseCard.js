import React from 'react';
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const { title, instructor, price } = course;

  return (
    <div className="course-card">
      <h2 className="course-title">{title}</h2>
      <p className="instructor">Instructor: {instructor}</p>
      <p className="price">Price: {price}</p>
      <button className="enroll-button">Enroll Now</button>
    </div>
  );
}

export default CourseCard;
