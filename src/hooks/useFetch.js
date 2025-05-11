import { useEffect } from 'react';
import { useGwent } from '../context/GwentContext';

export const useFetch = (url, options = {}) => {
  const { setCards, setLoading, setError } = useGwent();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setCards(Object.values(data.response));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, setCards, setLoading, setError]);
};