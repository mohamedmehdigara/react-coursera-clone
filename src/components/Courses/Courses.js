import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import "./Courses.css";

function Courses() {
  // Dummy data for courses (replace with actual data from backend)
  const courses = [
    { id: 1, title: 'Data Science Fundamentals', instructor: 'John Doe', price: '$49.99' },
    { id: 2, title: 'Web Development Bootcamp', instructor: 'Jane Smith', price: '$59.99' },
    { id: 3, title: 'Python Programming', instructor: 'Alice Johnson', price: '$39.99' },
    // Add more courses as needed
  ];

  return (
    <div className="courses-container">
      <h1>All Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
