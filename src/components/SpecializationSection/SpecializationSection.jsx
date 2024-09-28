import React from "react";
import Card from '../Card/Card';
import Button from "../Button/Button";
import './SpecializationSection.css';
import labsIcon from "../../assets/labs-icon.png";
import Stethoscope from "../../assets/Stethoscope.png";
import bloodSample from "../../assets/Blood Sample.png";
import cardiology from "../../assets/cardiology.png";
import piscologist from "../../assets/piscologist.png";
import mri from "../../assets/mri.png";
import Xray from "../../assets/x-ray.png";
const SpecializationSection = () => {
    const specializations = [
      { name: 'Dentistry', icon: labsIcon },
      { name: 'Primary Care', icon: Stethoscope },
      { name: 'Cardiology', icon: cardiology },
      { name: 'MRI Resonance', icon: mri },
      { name: 'Blood Test', icon: bloodSample },
      { name: 'Piscologist', icon: piscologist },
      { name: 'Laboratory', icon: labsIcon },
      { name: 'X-Ray', icon: Xray }
    ];
  
    return (
      <div className="specialization-section">
        <h1>Find By Specialization</h1>
        <div className="specialization">
          {specializations.map((category) => (
            <Card
              key={category.name}
              icon={category.icon}
              title={category.name}
              customStyles={{}}
            />
          ))}
        </div>
        <Button text="View All" className="navbar-button" />
      </div>
    );
  };
  
  export default SpecializationSection;