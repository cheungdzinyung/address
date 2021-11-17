import { useEffect, useState } from "react";

export function useFetchAllUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=500&nat=us,ca,gb&seed=nuvalence"
        );
        const res = await response.json();
        let data = res.results;
        Array.isArray(data) && data.sort(); // ensure response is an array
        data.sort((a, b) => (a.name.last > b.name.last ? 1 : -1)); //sort asc by last name
        setUsers(data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { users, isLoading, hasError };
}
