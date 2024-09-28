import React from "react";
import styles from "./DownloadSection.module.css"; 
import mobile from "../../assets/DownloadSection/mobile.jpg";
import Button from "../Button/Button";
import appleLogo from "../../assets/DownloadSection/apple.png";
import googlePlayLogo from "../../assets/DownloadSection/googleplay.png"

const DownloadSection = () => {
  return (
    <div className={styles.downloadSection}>
      <div className={styles.appPreview}>
        <div className={styles.phoneScreen}>
          <img
            src={mobile}
            alt="App Preview"
            className={styles.phoneImage}
          />
        </div>
        <div className={styles.appDetails}>
          <h2>Download the</h2>
          <span className={styles.highlight}>Medify App</span>
          <span>Get the link to download the app</span>
          <div className={styles.smsForm}>
            <input
              type="text"
              placeholder="+91 Enter phone number"
              className={styles.phoneInput}
            />
            <Button text="Send SMS" className="navbar-button"/>
          </div>
          <div className={styles.storeButtons}>
            <span><img src={googlePlayLogo} alt="Google Play logo"/></span>
            <span><img src={appleLogo} alt="apple logo"/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
