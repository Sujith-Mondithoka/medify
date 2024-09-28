import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { getStates, getCities } from '../../Services/api';
import styles from './SearchSection.module.css';
import CategoriesSection from './CategoriesSection';
import { useNavigate } from 'react-router-dom';

const SearchSection = ({ showCategories = true, customStyles, onSearch }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate=useNavigate();
  useEffect(() => {
    const fetchStates = async () => {
      const data = await getStates();
      setStates(data);
    };
    fetchStates();
  }, []);

  const handleStateChange = async (event) => {
    const state = event.target.value;
    setSelectedState(state);
    const data = await getCities(state);
    setCities(data);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      state: selectedState,
      city: selectedCity,
    }).toString();

    // Redirect to booking page with state and city as query parameters
    navigate(`/booking?${queryParams}`);
  };

  return (
    <div className={customStyles || styles.searchSection}>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdownWrapper}>
          <select className={styles.dropdown} onChange={handleStateChange} value={selectedState}>
            <option value="" disabled>Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className={styles.dropdownWrapper}>
          <select className={styles.dropdown} onChange={handleCityChange} value={selectedCity}>
            <option value="" disabled>Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <Button text="Search" onClick={handleSearch} className={styles.searchButton} />
      </div>
      {showCategories && <CategoriesSection />}
    </div>
  );
};

export default SearchSection;



