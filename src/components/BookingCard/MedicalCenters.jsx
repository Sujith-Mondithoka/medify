import React from 'react';
import BookingCard from './BookingCard';
import Pagination from '../Pagination/Pagination';
import styles from './MedicalCenters.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import PromoBanner from './PromoBanner';

const MedicalCenters = ({ centers, currentPage, totalPages, onPageChange, totalCenters }) => {
  return (
    <div className={styles.medicalCenters}>
      {centers.length > 0 && (
        <>
          <div className={styles.centersDetail}>
            <h1 className={styles.highlight}>
              {totalCenters} medical centers available in {centers[0].State}
            </h1>
            <p className={styles.text}>
              <span><FaCheckCircle/></span>Book an appointment with minimum wait-time & verified doctor details
            </p>
          </div>
          <div className={styles.medicalContainer}>
            <div className={styles.centersContainer}>
              {centers.map((medicalCenter) => (
                <BookingCard key={medicalCenter['Provider ID']} medicalCenter={medicalCenter} />
              ))}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
              )}
            </div>
            {/* Display PromoBanner only when centers are available */}
            <PromoBanner />
          </div>
        </>
      )}
      {centers.length === 0 && <p>No medical centers found for the selected state and city.</p>}
    </div>
  );
};

export default MedicalCenters;



