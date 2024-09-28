import React from 'react';
import styles from './PromoBanner.module.css'; // Scoped CSS
import promoImage from '../../assets/BookingCard/sensodyne_dweb.png.png'

const PromoBanner = () => (
  <div className={styles.banner}>
    <img src={promoImage} alt="not available" />
  </div>
);

export default PromoBanner;
