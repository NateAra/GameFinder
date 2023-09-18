import ListGroup from "./components/ListGroup";

const App = () => {

  const itemList = ["Norway", "USA", "Tokyo", "London"];

  const handleSelecteItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={itemList} heading="List" onSelectItem={handleSelecteItem}/>
    </div>
  );
};

export default App;
