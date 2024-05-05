import React from 'react';
import "./CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = ({ course, enrollmentPageUrl }) => {
  const { title, instructor, price } = course;

  return (
    <div className="course-card">
      <h2 className="course-title">{title}</h2>
      <p className="instructor">Instructor: {instructor}</p>
      {price && <p className="price">Price: {price}</p>}
      <Link to={enrollmentPageUrl}><button className="enroll-button">Enroll Now</button></Link>
    </div>
  );
}

export default CourseCard;
