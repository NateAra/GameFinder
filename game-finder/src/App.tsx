import ListGroup from "./components/ListGroup";

const App = () => {

  const itemList = ["item1", "item2", "item3", "item4"];

  return (
    <div>
      <ListGroup items={itemList} heading="List"/>
    </div>
  );
};

export default App;
