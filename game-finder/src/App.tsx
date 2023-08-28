import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["Trondheim", "Oslo", "Asmera"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
};

export default App;