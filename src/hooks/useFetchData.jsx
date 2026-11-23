import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (fetchError) {
        if (fetchError.name === 'AbortError') return;
        setError(`${fetchError} Fetching Data `);
      } finally {
        if (!controller.signal.aborted) setIsPending(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, isPending, error };
};
