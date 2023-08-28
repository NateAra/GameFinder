import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["Trondheim", "Oslo", "Asmera", 'Tokyo'];

  const handelSelectItem = (items: string) => {
    console.log(items);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelecteItem={handelSelectItem}/>
    </div>
  );
};

export default App;