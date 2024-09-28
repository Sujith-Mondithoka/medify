// src/components/OurFamilies/OurFamilies.jsx
import React from 'react';
import styles from './OurFamilies.module.css';
import StatCard from './StatCard';

import patientIcon from '../../assets/OurFamilies/patientIcon.png';
import hospitalIcon from '../../assets/OurFamilies/hospitalIcon.png';
import laboratoryIcon from '../../assets/OurFamilies/laboratoryIcon.png';
import doctorIcon from '../../assets/OurFamilies/doctorIcon.png';

const OurFamilies = () => {
  return (
    <section className={styles.ourFamilies}>
      <div className={styles.textContent}>
        <p className={styles.subheading}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
        <h2 className={styles.heading}>Our Families</h2>
        <p className={styles.description}>
          We will work with you to develop individualized care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.leftColumn}>
            <StatCard icon={patientIcon} number="5000+" text="Happy Patients" />
            <StatCard icon={hospitalIcon} number="200+" text="Hospitals" />
        </div>
        <div className={styles.rightColumn}>
            <StatCard icon={laboratoryIcon} number="1000+" text="Laboratories" />
            <StatCard icon={doctorIcon} number="700+" text="Expert Doctors" />
        </div>
      </div>
    </section>
  );
};

export default OurFamilies;
