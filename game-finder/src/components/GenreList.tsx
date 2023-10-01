import useGenres from "../hooks/UseGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <div>
      {data.map((genre) => (
        <li key={genre.id}> {genre.name} </li>
      ))}
    </div>
  );
};

export default GenreList;
