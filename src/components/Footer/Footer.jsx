import React from "react";
import medifyLogo from '../../assets/medify.png';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';
const Footer = () =>{
    return (
        <div className={styles.footerContainer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerImage}>
                            <img src={medifyLogo} alt="Medify Logo" />
                            <span className={styles.brandName}>Medify</span>
                        </div>
                        <div className={styles.socialLinks}>
                            <FaFacebookF className={styles.socials}/>
                            <FaTwitter className={styles.socials} />
                            <FaYoutube className={styles.socials}/>
                            <FaTwitter className={styles.socials}/>
                        </div>
                    </div>
                    <div className={styles.footerLists}>
                            <ul className={styles.ulElements}>
                                <li>About Us</li>
                                <li>Pricing</li>
                                <li>Gallery</li>
                                <li>Appointment</li>
                                <li>Privacy Policy</li>
                            </ul>
                            <ul className={styles.ulElements}>
                                <li>Ornithology</li>
                                <li>Neurology</li>
                                <li>Dental Care</li>
                                <li>Opthalmology</li>
                                <li>Cardiology</li>
                            </ul>
                            <ul className={styles.ulElements}>
                                <li>About Us</li>
                                <li>Pricing</li>
                                <li>Gallery</li>
                                <li>Appointment</li>
                                <li>Privacy Policy</li>
                            </ul>
                    </div>
                </div>
                <div className={styles.copyRight}>
                    <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;