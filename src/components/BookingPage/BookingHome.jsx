import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import SearchSection from "../SearchSection/SearchSection";
import MedicalCenters from "../BookingCard/MedicalCenters";
import { getMedicalCenters } from "../../Services/api";
import styles from './BookingHome.module.css';
import FaqSection from "../FaqSection/FaqSection";
import DownloadSection from "../DownloadSection/DownloadSection";
import Footer from "../Footer/Footer";
const BookingPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get('state');
  const city = searchParams.get('city');
  
  const [centers, setCenters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchCenters = async () => {
      if (state) {
        const data = await getMedicalCenters(state, city);
        setCenters(data);
      }
    };
    fetchCenters();
  }, [state, city]);

  const handleSearch = async (state, city) => {
    if (!state) {
      console.log("State is required.");
      return;
    }
    const data = await getMedicalCenters(state, city || "");
    setCenters(data);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCenters = centers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(centers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={styles.bookingNav}>
        <p className="overview">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
        <Navbar customStyles={styles.navbar} />
        <div className="container">
          <SearchSection showCategories={false} customStyles={styles.searchSection} onSearch={handleSearch} />
        </div>
      </div>
      <div className={styles.centers}>
        <MedicalCenters 
          centers={currentCenters} 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
          totalCenters={centers.length}
        />
      </div>
      <FaqSection/>
      <DownloadSection/> 
      <Footer/>
    </>
  );
};

export default BookingPage;


