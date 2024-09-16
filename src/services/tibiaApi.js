import axios from 'axios';

const BASE_URL = 'https://api.tibiadata.com/v4/';

export const getClassList = async (classList) => {
  try {
    const response = await axios.get(`${BASE_URL+classList}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
};