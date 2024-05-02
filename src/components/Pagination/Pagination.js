import React from 'react';
import './Pagination.css'; // Import the CSS file for styling

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination-button ${pageNumber === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
