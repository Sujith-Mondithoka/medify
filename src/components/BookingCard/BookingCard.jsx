import React, { useState, useEffect } from 'react';
import styles from './BookingCard.module.css';
import ResultCard from '../ResultCard/ResultCard';
import Button from '../Button/Button';
const BookingCard = ({ medicalCenter, onBook }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDateIndex, setActiveDateIndex] = useState(0);
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [buttonText, setButtonText] = useState("Book FREE Center Visit");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // Reset button text and selections when expanding/collapsing
    if (!isExpanded) {
      setButtonText("Book FREE Center Visit");
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  useEffect(() => {
    // Generate a list of 10 days starting from today
    const generateDates = () => {
      const today = new Date();
      const dateList = [];
      for (let i = 0; i < 10; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dateList.push({
          day: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }),
          slots: generateTimeSlots(i),
        });
      }
      return dateList;
    };

    setDates(generateDates());
  }, []);

  // Function to generate available time slots for each date
  const generateTimeSlots = (dateIndex) => {
    return {
      morning: ['11:30 AM'],
      afternoon: ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM', '02:30 PM'],
      evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
    };
  };

  // Scroll to the previous set of 3 days
  const handlePrevDate = () => {
    if (activeDateIndex > 0) {
      setActiveDateIndex(activeDateIndex - 3); // Scroll back by 3 days
    }
  };

  // Scroll to the next set of 3 days
  const handleNextDate = () => {
    if (activeDateIndex + 3 < dates.length) {
      setActiveDateIndex(activeDateIndex + 3); // Scroll forward by 3 days
    }
  };

  // Handle selecting a date
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Clear previously selected time when selecting a new date
  };

  // Handle selecting a time slot
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setButtonText("Book Now"); // Change button text when a time is selected
  };

  // Function to trigger the booking process
  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Create a booking object
      const booking = {
        center: medicalCenter,
        date: selectedDate.day, // Store the displayed date
        time: selectedTime,
      };

      // Get previous bookings from localStorage
      const previousBookings = JSON.parse(localStorage.getItem('bookings')) || [];

      // Add the new booking
      const updatedBookings = [...previousBookings, booking];

      // Store the updated bookings back to localStorage
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));

      alert("Booking confirmed!");

      // Reset selections
      setSelectedDate(null);
      setSelectedTime(null);
      setIsExpanded(false); // Optionally collapse the card
    } else {
      alert("Please select both date and time.");
    }
  };

  return (
    <div className={styles.resultCard}>
      <ResultCard 
        medicalCenter={medicalCenter}
        onToggleExpand={toggleExpand}
        isExpanded={isExpanded}
      />

      {isExpanded && (
        <div className={styles.calendarContainer}>
          <div className={styles.calendarHeader}>
            <button className={styles.prevBtn} onClick={handlePrevDate} disabled={activeDateIndex === 0}>
              &lt;
            </button>
            <div className={styles.dateSlot}>
              {dates.slice(activeDateIndex, activeDateIndex + 3).map((date, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.singleDate} ${selectedDate === date ? styles.selected : ''}`} 
                  onClick={() => handleDateSelect(date)}
                >
                  <p className={styles.day}>{date.day}</p>
                  <span className={styles.slots}>
                    {date.slots.morning.length + date.slots.afternoon.length + date.slots.evening.length} Slots Available
                  </span>
                </div>
              ))}
            </div>
            <button className={styles.nextBtn} onClick={handleNextDate} disabled={activeDateIndex + 3 >= dates.length}>
              &gt;
            </button>
          </div>

          {/* Time Slots Section - Only display if a date is selected */}
          {selectedDate && (
            <div className={styles.timeSlots}>
              <div className={styles.timeSlotZones}>
                <p className={styles.timeSlotHeader}>Morning</p>
                {selectedDate.slots.morning.map((slot, index) => (
                  <button 
                    key={index} 
                    className={`${styles.timeButton} ${selectedTime === slot ? styles.selectedTime : ''}`} 
                    onClick={() => handleTimeSelect(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <div className={styles.timeSlotZones}>
                <p className={styles.timeSlotHeader}>Afternoon</p>
                {selectedDate.slots.afternoon.map((slot, index) => (
                  <button 
                    key={index} 
                    className={`${styles.timeButton} ${selectedTime === slot ? styles.selectedTime : ''}`} 
                    onClick={() => handleTimeSelect(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <div className={styles.timeSlotZones}>
                <p className={styles.timeSlotHeader}>Evening</p>
                {selectedDate.slots.evening.map((slot, index) => (
                  <button 
                    key={index} 
                    className={`${styles.timeButton} ${selectedTime === slot ? styles.selectedTime : ''}`} 
                    onClick={() => handleTimeSelect(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Show the 'Book' button only after a time is selected */}
          {selectedTime && (
            <Button text='Book Now' type='button' onClick={handleBooking} className={styles.bookingButton}/>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingCard;

