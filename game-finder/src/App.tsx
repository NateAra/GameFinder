import { Button } from "./components/Button";

const App = () => { 

  return (
    <div>
      <Button color="info" handleClick={() => console.log('Clicked')}>
        My Button
      </Button>
    </div>
  );
};

export default App;