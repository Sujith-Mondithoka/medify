import React, { useState, useEffect } from 'react';
import styles from './BookingSearch.module.css';

const BookingsSearch = ({ onSearch, customStyles }) => {
  const [hospitalName, setHospitalName] = useState('');
  const [debouncedHospitalName, setDebouncedHospitalName] = useState(hospitalName);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedHospitalName(hospitalName);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [hospitalName]);

  useEffect(() => {
    if (onSearch && debouncedHospitalName) {
      onSearch(debouncedHospitalName);
    }
  }, [debouncedHospitalName, onSearch]);

  const handleInputChange = (event) => {
    setHospitalName(event.target.value);
  };

  return (
    <div className={customStyles || styles.searchSection}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Hospital"
          value={hospitalName}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <button onClick={() => onSearch(debouncedHospitalName)} className={styles.searchButton}>
          Search
        </button>
      </div>
    </div>
  );
};

export default BookingsSearch;

