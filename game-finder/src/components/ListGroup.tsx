import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
} 

const ListGroup = ( { items, heading } : ListGroupProps) => {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <p>No Items</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
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
