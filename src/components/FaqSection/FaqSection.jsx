// src/components/FaqSection/FaqSection.jsx
import React from 'react';
import styles from './FaqSection.module.css';

// Images (replace with actual paths to your images)
import doctorImage from '../../assets/FaqSection/FaqDoctorImage.png';
import smileyIcon from '../../assets/FaqSection/smiley.png';
import heartIcon from '../../assets/FaqSection/heartIcon.png';

const FaqSection = () => {
  return (
    <section className={styles.faqSection}>
      <h3 className={styles.subheading}>Get Your Answer</h3>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={doctorImage} alt="Doctor with Patient" className={styles.image} />
          <div className={styles.statBadge}>
            <img src={smileyIcon} alt="Smiley" className={styles.badgeIcon} />
            <div className={styles.statText}>
              <h3>84k+</h3>
              <p>Happy Patients</p>
            </div>
          </div>
          <div className={styles.heartIcon}>
            <img src={heartIcon} alt="Heart" />
          </div>
        </div>

        {/* FAQ List */}
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h4>Why choose our medical for your family?</h4>
            <span className={styles.plus}>+</span>
          </div>
          <div className={styles.faqItem}>
            <h4>Why are we different from others?</h4>
            <span className={styles.plus}>+</span>
          </div>
          <div className={styles.faqItem}>
            <h4>Trusted & experience senior care & love</h4>
            <span className={styles.plus}>+</span>
          </div>
          <div className={styles.faqItem}>
            <h4>How to get an appointment for emergency cases?</h4>
            <span className={styles.plus}>+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
