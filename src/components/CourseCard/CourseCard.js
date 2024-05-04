import React from 'react';
import "./CourseCard.css";
import {Link} from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, instructor, price } = course;

  return (
    <div className="course-card">
      <h2 className="course-title">{title}</h2>
      <p className="instructor">Instructor: {instructor}</p>
      <p className="price">Price: {price}</p>
      <Link to="/enroll"><button className="enroll-button">Enroll Now</button></Link>
    </div>
  );
}

export default CourseCard;
