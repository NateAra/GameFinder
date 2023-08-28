import { Button } from "./components/Button";

const App = () => { 

  return (
    <div>
      <Button handleClick={() => console.log('Clicked')}>
        My Button
      </Button>
    </div>
  );
};

export default App;