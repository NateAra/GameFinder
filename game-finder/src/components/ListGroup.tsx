import { MouseEvent } from "react";

const ListGroup = () => {
  const itemList = ["item1", "item2", "item3", "item4"];

  let selectedIndex = 0;

  const handleClick = (event: MouseEvent) => console.log(event);


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
              className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
              onClick={handleClick}
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
