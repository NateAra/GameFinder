import { useState } from "react";

const App = () => {
  const [tag, setTag] = useState(['Happy', ' Sad']);

  const handleClick = () => {
    // setTag([...tag, ' Cheerful']);

    setTag(tag.filter(tag => tag !== ' Sad'));

    //Update
    // setTag(tag.map(tag => tag === 'Happy' ? 'Happiness' : tag));
  }

  return (
    <div>
      <button className="btn btn-info" onClick={handleClick}>
        Click ME
      </button>
      {tag}
    </div>
  );
};

export default App;
