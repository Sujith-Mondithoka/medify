import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchSection from "./components/SearchSection/SearchSection";
import MainSection from "./components/MainSection/MainSection";
import PromotionalCarousel from "./components/PromotionSection/PromotionCorousel";
import SpecializationSection from "./components/SpecializationSection/SpecializationSection";
import SpecialistSection from "./components/SpecialistSection/SpecialistSection";
import PatientCaring from "./components/consultation/consultation";
import LatestNews from "./components/Blog/LatestNews";
import OurFamilies from "./components/OurFamilies/OurFamilies";
import FaqSection from "./components/FaqSection/FaqSection";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import BookingPage from "./components/BookingPage/BookingHome";
import MyBookings from "./components/MyBookings/MyBookings";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p className="overview">
                  The health and well-being of our patients and their health
                  care team will always be our priority, so we follow the best
                  practices for cleanliness.
                </p>
                <div className="container">
                  <Navbar />
                  <MainSection />
                  <SearchSection showCategories={true} />
                </div>
                <div>
                  <PromotionalCarousel />
                </div>
                <div className="container">
                  <SpecializationSection />
                </div>
                <div>
                  <SpecialistSection />
                </div>
                <div className="container">
                  <PatientCaring />
                </div>
                <div>
                  <LatestNews />
                </div>
                <div className="container">
                  <OurFamilies />
                </div>
                <div>
                  <FaqSection />
                </div>
                <div className="container">
                  <DownloadSection />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/myBookings" element={<MyBookings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
