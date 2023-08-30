import { useState } from "react";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { Like } from "./components/Like";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}

      <Button color="info" handleClick={() => setAlertVisibility(true)}>
        Alert
      </Button>

      <Like heartClick={() => console.log('Clicked')}/>
    </div>
  );
};

export default App;
