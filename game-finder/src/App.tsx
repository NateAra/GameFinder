import { Alert } from "./components/Alert";
import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["Trondheim", "Oslo", "Asmera", "Tokyo"];

  const handelSelectItem = (items: string) => {
    console.log(items);
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelecteItem={handelSelectItem}
      /> */}
      <Alert>
        Hellow <span>World!</span>
      </Alert>
    </div>
  );
};

export default App;
