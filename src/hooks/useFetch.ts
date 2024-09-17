import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.tibiadata.com/v4/';

const useFetch = <T>(url: string): [T | null, boolean] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL+url}`);
        console.log(response);
        const result: T = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loading]; // Ensure this array is returned
};

export default useFetch;
