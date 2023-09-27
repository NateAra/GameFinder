import axios from "axios";
import { useEffect, useState } from "react";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();

      axios
        .get<FetchGamesResponse>("http://localhost:3001", {signal: controller.signal})
        .then((response) => setGames(response.data.results))
        .catch((error) => setError(error.message));

        return () => controller.abort();
    }, []);

  return (
    {games, error}
  )
}

export default useGames