import useData from "./useData";

interface Platfom {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useData<Platfom>("http://localhost:3001/platforms/lists/parents");

export default usePlatforms;
