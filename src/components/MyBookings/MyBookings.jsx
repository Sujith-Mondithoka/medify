import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import BookingsSearch from "../BookingsSearch/BookingsSearch";
import ResultCard from "../ResultCard/ResultCard";
import Pagination from "../Pagination/Pagination"; // Import Pagination
import styles from './MyBookings.module.css';
import DownloadSection from "../DownloadSection/DownloadSection";
import Footer from "../Footer/Footer";
import PromoBanner from "../BookingCard/PromoBanner";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(savedBookings);
    setFilteredBookings(savedBookings);
  }, []);

  const handleSearch = (hospitalName) => {
    if (!hospitalName) {
      setFilteredBookings(bookings);
    } else {
      const filtered = bookings.filter((booking) =>
        booking.center['Hospital Name'].toLowerCase().includes(hospitalName.toLowerCase())
      );
      setFilteredBookings(filtered);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

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
          <span className={styles.highlight}>My Bookings</span>
        </div>
        <div className="container">
          <BookingsSearch onSearch={handleSearch} />
        </div>
      </div>

      <div className="container">
        <div className={styles.bookingsContainer}>
          <div className={styles.cardsContainer}>
            {currentBookings.length === 0 ? (
              <p>You have no bookings that match the search criteria.</p>
            ) : (
              currentBookings.map((booking, index) => (
                <div key={index} className={styles.resultCard}>
                  <ResultCard 
                    medicalCenter={booking.center} 
                    isExpanded={false}
                    onToggleExpand={() => {}} 
                    bookedDate={booking.date}
                    bookedTime={booking.time}
                    isBookingPage={true}
                    hideLikeSection={true} 
                    hideAvailableToday={true}
                    hideBookButton={true}
                  />
                </div>
              ))
            )}
            {filteredBookings.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredBookings.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        )}
          </div>
          {filteredBookings.length > 0 && <PromoBanner />}
        </div>
      </div>

      <DownloadSection />
      <Footer />
    </>
  );
};

export default MyBookings;
