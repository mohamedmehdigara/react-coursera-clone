import React, { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import "./Courses.css";

function Courses() {
  // Dummy data for courses (replace with actual data from backend)
  const [courses, setCourses] = useState([
    { id: 1, title: 'Data Science Fundamentals', instructor: 'John Doe', price: '$49.99' },
    { id: 2, title: 'Web Development Bootcamp', instructor: 'Jane Smith', price: '$59.99' },
    { id: 3, title: 'Python Programming', instructor: 'Alice Johnson', price: '$39.99' },
    // Add more courses as needed
  ]);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(3);

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="courses-container">
      <h1>All Courses</h1>
      <div className="course-list">
        {currentCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(courses.length / coursesPerPage) }, (_, i) => (
            <li key={i+1} className={i+1 === currentPage ? 'active' : null}>
              <button onClick={() => paginate(i+1)}>{i+1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Courses;
