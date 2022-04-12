import { useState } from "react";

function App() {

  const [arr, setArr] = useState([33, 44]);
  const [render, setRender] = useState(0);

  const clickHandler = () => {
    let tempArr = [...arr];
    tempArr.push(55);
    console.log(tempArr);
    setArr(tempArr);
    const renderSet = render;
    setRender(renderSet);
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>Go</button>
      <div>{arr}</div>
    </div>
  );
}

export default App;
