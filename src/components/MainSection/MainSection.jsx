// import React from 'react';
// import Button from '../Button/Button';
// import './MainSection.css';


// const MainSection = () => {
//   const handleFindCentersClick = () => {
//     console.log('Finding Centers...');
//   };

//   return (
//     <div className="main-section">
//       <div className="main-content">
//         <h1>Skip the travel! Find Online</h1>
//         <span className="highlight"><span className='highlight1'>Medical</span> Centers</span>
//         <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
//         <Button text="Find Centers" onClick={handleFindCentersClick} className="find-centers-button" />
//       </div>
//       <div className='image-layout'>
//         <img src={heroImage} alt="Doctor" className="main-image" />
//       </div>
//     </div>
//   );
// };

// export default MainSection;
import React from 'react';
import styles from './MainSection.module.css';
import heroImage from '../../assets/doctor.svg';

const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContent}>
        <h1>
          Skip the travel! Find Online <br />
          <span className={styles.highlight}>Medical Centers</span>
        </h1>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
        </p>
        <button className={styles.findCentersButton}>Find Centers</button>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImage} alt="Doctor" className={styles.mainImage} />
      </div>
    </section>
  );
};

export default MainSection;


