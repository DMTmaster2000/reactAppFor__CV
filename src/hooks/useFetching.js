import { useState } from 'react';

export const useFetching = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetching = async (id) => {
    try {
      setLoading(true);
      await callback(id);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
