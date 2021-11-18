import { useEffect, useState } from "react";

export const useFetch = (url, refetch) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if(!refetch) {
        return
      }

      setIsLoading(true);
      try {
        const response = await fetch(url);
        const res = await response.json();
        setData(res);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, refetch]);

  return { data, isLoading, hasError };
};
