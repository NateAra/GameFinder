import { useState } from "react";
import Alert from "./components/Alert";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleOpen = () => {
    setShowAlert(true);
  };

  return (
    <div>
      {!showAlert && (
        <button className="btn btn-primary" onClick={handleOpen}>
          Open Alert
        </button>
      )}
      {showAlert && <Alert onClose={handleClose}></Alert>}
    </div>
  );
};

export default App;
