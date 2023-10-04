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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "http://localhost:3001/games",
    {
      params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
