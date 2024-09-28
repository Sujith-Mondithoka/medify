import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './Navbar.module.css';
import medifyLogo from '../../assets/medify.png';
import { useNavigate } from 'react-router-dom';

const Navbar = ({customStyles}) => {

  const navigate= useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleBookingsClick = () => {
    navigate('/booking');
  };
  const handleBookingsPage=()=>{
    navigate('/myBookings')

  }

  return (
    <nav className={customStyles || styles.navbar}>
      <div className={styles.navbarBrand}>
        <span><img src={medifyLogo} alt="Medify Logo" /></span>Medify
      </div>
      <ul className={`${styles.navbarLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
        <li onClick={handleBookingsClick}>Find Doctors</li>
        <li onClick={handleBookingsClick}>Hospitals</li>
        <li onClick={handleBookingsClick}>Medicines</li>
        <li onClick={handleBookingsClick}>Surgeries</li>
        <li onClick={handleBookingsClick}>Software for Provider</li>
        <li onClick={handleBookingsClick}>Facilities</li>
        <li className={styles.mobileOnly}>
          <Button text="My Bookings" onClick={handleBookingsPage} className={styles.mobileButton} />
        </li>
      </ul>
      <Button text="My Bookings" onClick={handleBookingsPage} className={styles.navbarButton} />

      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;

