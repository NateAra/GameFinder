import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setdata] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((response) => {
        setdata(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
