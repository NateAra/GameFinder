import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("http://localhost:3001/genres");

export default useGenres;
