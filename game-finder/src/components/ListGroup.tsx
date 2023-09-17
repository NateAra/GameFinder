const ListGroup = () => {
  const itemList = ["item1", "item2", "item3", "item4"];

  return (
    <>
      <h1>Lists</h1>
      {itemList.length === 0 ? (
        <p>No Items</p>
      ) : (
        <ul className="list-group">
          {itemList.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
