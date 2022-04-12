import { useState } from "react";

function App() {

  const [value, setValue] = useState(0);

  const inputHandler = event => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <input type="range" value={value} onChange={inputHandler} />
      <p>{value}</p>
    </div>
  );
}

export default App;
