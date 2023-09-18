import { useState } from "react";

const ListGroup = () => {
  const itemList = ["item1", "item2", "item3", "item4"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Lists</h1>
      {itemList.length === 0 ? (
        <p>No Items</p>
      ) : (
        <ul className="list-group">
          {itemList.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setSelectedIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
