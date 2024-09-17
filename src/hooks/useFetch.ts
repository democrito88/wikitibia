import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.tibiadata.com/v4/';

const useFetch = <T>(url: string): [T | null, boolean] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${BASE_URL+url}`)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => 
          {
          setData(null);
          console.error(error);
        })
        .finally(() => setLoading(false));
      }
    fetchData();
  }, [url]);

  return [data, loading];
};

export default useFetch;
