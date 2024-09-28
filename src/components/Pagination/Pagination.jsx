import React from 'react';
import Button from '../Button/Button';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Ensure that page numbers stay within the valid range
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return; // Do nothing if the new page is outside the valid range
    }
    onPageChange(newPage); // Call onPageChange if it's within range
  };

  return (
    <div className={styles.paginationContainer}>
      <Button
        text="Previous"
        onClick={() => handlePageChange(currentPage - 1)}
        className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ''}`}
        type="button"
        disabled={currentPage === 1}
      />

      <span className={styles.pageInfo}>
       {currentPage}
      </span>

      <Button
        text="Next"
        onClick={() => handlePageChange(currentPage + 1)}
        className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ''}`}
        type="button"
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;




