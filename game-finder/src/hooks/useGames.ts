import { Genre } from "./UseGenres";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "http://localhost:3001/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );

export default useGames;
