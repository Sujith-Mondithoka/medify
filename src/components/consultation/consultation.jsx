import React from "react";
import styles from "./consultation.module.css";
import topImage from "../../assets/consultation/topPatient.png";
import bottomImage from "../../assets/consultation/bottomPatient.png";

const PatientCaring = () => {
  return (
    <div className={styles["patient-caring"]}>
      <div className={styles["top-section"]}>
        <div className={styles["free-consultation"]}>
          <div className={styles.icon}></div>
          <div className={styles["consultation-text"]}>
            <h3>Free Consultation</h3>
            <p>Consultation with the best</p>
          </div>
        </div>
        <div className={styles.imageStack}>
            <img src={topImage} className={styles["image-top"]} alt="Doctor consulting patient" />  
            <img src={bottomImage} className={styles["image-down"]} alt="Doctor with patient" />    
        </div>

      </div>

      {/* Main Heading Section */}
      <div className={styles["main-heading"]}>
        <h2>HELPING PATIENTS FROM AROUND THE GLOBE!!</h2>
        <h1>
          Patient <span>Caring</span>
        </h1>
        <p>
          Our goal is to deliver quality care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div className={styles["lower-section"]}>
            <div className={styles["bullet-points"]}>
                <ul>
                    <li>Stay Updated About Your Health</li>
                    <li>Check Your Results Online</li>
                    <li>Manage Your Appointments</li>
                </ul>
            </div>
        </div>
      </div>

    </div>
  );
};

export default PatientCaring;
