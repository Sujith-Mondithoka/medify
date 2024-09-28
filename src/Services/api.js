import axios from "axios";

const BASE_URL = "https://meddata-backend.onrender.com";

export const getStates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/states`);
    return response.data;
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
};

export const getCities = async (state) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${state}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};

export const getMedicalCenters = async (state, city = "") => {
  try {
    const response = await axios.get(`${BASE_URL}/data`, {
      params: { state, city },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching medical centers:", error);
    return [];
  }
};
