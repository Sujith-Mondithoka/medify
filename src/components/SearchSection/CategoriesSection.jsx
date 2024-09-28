import React from 'react';
import styles from './CategoriesSection.module.css'; // Import module-scoped CSS
import doctorIcon from "../../assets/doctor-icon.png";
import labsIcon from "../../assets/labs-icon.png";
import hospitalIcon from "../../assets/Hospital-icon.png";
import capsuleIcon from "../../assets/Capsule-icon.png";
import ambulanceIcon from "../../assets/Ambulance-icon.png";
import Card from '../Card/Card';

const CategoriesSection = () => {
  const categories = [
    { name: 'Doctors', icon: doctorIcon },
    { name: 'Labs', icon: labsIcon },
    { name: 'Hospitals', icon: hospitalIcon },
    { name: 'Medical Store', icon: capsuleIcon },
    { name: 'Ambulance', icon: ambulanceIcon }
  ];

  return (
    <div className={styles.categoriesSection}>
      <p>You may be looking for</p>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Card
            key={category.name}
            icon={category.icon}
            title={category.name}
            customStyles={styles.categoryCard}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;

