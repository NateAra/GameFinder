import { useState } from "react";

const ListGroup = () => {
  let cities = ["Trondheim", "Oslo", "Asmera"];

  const [selectedIndex, setSelectedIndex] = useState(-1)

  

  const getMessage = () => {
    return cities.length === 0 && <p>List not found</p>;
  };


  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
