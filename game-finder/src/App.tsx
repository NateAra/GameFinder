import { useState } from "react";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "Nate",
    address: {
      city: "Trondheim",
      zipCode: 1111,
    },
  });

  const handleclick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 9999 },
    });
  };

  return (
    <div>
      <button className="btn btn-info" onClick={handleclick}>
        Click ME
      </button>
      {customer.address.zipCode}
    </div>
  );
};

export default App;
