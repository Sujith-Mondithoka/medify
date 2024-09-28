import React from "react";
import styles from './Card.module.css'; // Import module-scoped CSS (if needed)

const Card = ({ icon, title, customStyles }) => {
  return (
    <div className={styles.cardItem} style={{ ...customStyles }}>
      <img src={icon} alt={title} className={styles.cardIcon} />
      <span className={styles.cardTitle}>{title}</span>
    </div>
  );
};

export default Card;

