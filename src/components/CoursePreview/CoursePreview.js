import React from 'react';
import Card from '../Card/Card';
import "./CoursePreview.css";

const CoursePreview = () => {
  return (
    <div>
      <h2>Course Previews</h2>
      <div className="card-container">
        <Card
          title="Introduction to Data Science"
          description="Learn the fundamentals of data science with this introductory course."
        />
        <Card
          title="Web Development Bootcamp"
          description="Become a full-stack web developer in this comprehensive bootcamp."
        />
      </div>
    </div>
  );
};

export default CoursePreview;
