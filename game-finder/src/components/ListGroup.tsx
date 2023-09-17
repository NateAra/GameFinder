const ListGroup = () => {
  const itemList = ["item1", "item2", "item3", "item4"];

  return (
    <ul className="list-group">
      {itemList.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
    </ul>
  );
};

export default ListGroup;

