import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.tibiadata.com/v4/';

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    try{
      let response = axios.get(`${BASE_URL+classList}`);
      setData(response);
    }catch(error){
      console.error('Error getting data: ',error);
    }finally{
      setLoading(false);
    }

    return [data, loading]
  });
};

export const getClassList = async (classList) => {
  try {
    const response = await axios.get(`${BASE_URL+classList}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
};