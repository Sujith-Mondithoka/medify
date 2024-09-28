import React from 'react';
import styles from './ResultCard.module.css';
import hospitalImg from "../../assets/BookingCard/hospital_image.png";
import { FaThumbsUp } from 'react-icons/fa';

const ResultCard = ({ 
  medicalCenter, 
  onToggleExpand, 
  isExpanded, 
  hideLikeSection = false, 
  hideAvailableToday = false, 
  hideBookButton = false,
  bookedDate,
  bookedTime,
  isBookingPage
}) => {
  return (
    <div className={styles.cardContent}>
      <img src={hospitalImg} alt="hospital" className={styles.hospitalIcon} />
      <div className={styles.contentContainer}>
        <div>
          <h3 className={styles.hospitalName}>{medicalCenter['Hospital Name']}</h3>
          <p className={styles.place}>{medicalCenter.City}, {medicalCenter.State}</p>
          <p className={styles.specialization}>{medicalCenter['Hospital Type']}</p>
        </div>
        <div className={styles.fee}>
            <div className={styles.likeSection}>
            {!hideLikeSection && (
              <p>
                <span className={styles.free}>FREE</span> 
                <span className={styles.strike}>
                  <strike>₹500</strike>
                </span> 
                Consultation fee at clinic
              </p>)}
              <div className={styles.like}>
                <FaThumbsUp />
                <span>{medicalCenter['Hospital overall rating'] || 'No Rating'}</span>
              </div>
            </div>
          
          <div className={styles.buttonSection}>
            {!hideAvailableToday && <p>Available Today</p>}
            {!hideBookButton && (
              <button className={styles.cardButton} onClick={onToggleExpand}>
                {isExpanded ? 'Hide Calendar' : 'Book FREE Center Visit'}
              </button>
            )}
          </div>
        </div>
      </div>
      {isBookingPage && (
        <div className={styles.bookingInfo}>
          <button className={styles.timeButton}>{bookedTime}</button>
          <button className={styles.dateButton}>{bookedDate}</button> 
        </div>
      )}
    </div>
  );
};

export default ResultCard;

