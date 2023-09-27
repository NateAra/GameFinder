import { useEffect, useState } from "react";
import axios from "axios";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<GamesResponse>("http://localhost:3001")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
    {error && <Text> {error} </Text> }
    <ul>
      
      {games.map((game) => (
        <li key={game.id}> {game.name} </li>
      ))}
    </ul>
    </>
  );
};

export default GameGrid;
