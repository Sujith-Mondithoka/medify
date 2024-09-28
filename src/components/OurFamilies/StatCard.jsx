import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ icon, number, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={text} className={styles.icon} />
      </div>
      <h3 className={styles.number}>{number}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default StatCard;