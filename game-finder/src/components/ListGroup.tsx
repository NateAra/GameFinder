const ListGroup = () => {
  let cities = ["Trondheim", "Oslo", "Asmera", "Tokyo", "London"];

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>List not found</p>}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
