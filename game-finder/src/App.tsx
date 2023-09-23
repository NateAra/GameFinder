import { useState } from "react";

const App = () => {

  const [drink, setDrink] = useState({
    title: 'Water',
    price: 2,
  });

  const handleclick = () => {
    setDrink({...drink, price: 18});
  };

  return (
    <div>
      <button className="btn btn-info" onClick={handleclick}>Click ME</button>
      {drink.price}
    </div>
  );
};

export default App;
