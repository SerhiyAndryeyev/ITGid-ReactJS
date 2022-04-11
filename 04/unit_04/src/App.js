import './App.css';
import React from 'react';
// import { createRef } from 'react/cjs/react.production.min';

function App() {
  let count4 = 0;
  const task5RefInput = React.createRef();
  const task5RefOut = React.createRef();
  const task6RefSelect = React.createRef();
  const task6RefOut = React.createRef();
  const task7RefDiv = React.createRef();
  const task9RefInput = React.createRef();
  const task9RefDiv = React.createRef();
  const task10RefInput = React.createRef();

  const randomRGB = () => {
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    return `rgb(${a},${b},${c})`;
  };

  function task1() {
    console.log('task2');
  }

  function task2(e) {
    e.target.className = 'active';
  }

  function task3(e) {
    console.log(e.target.value);
  }

  function task4(e) {
    count4++;
    console.log(count4);
  }

  function task5(e) {
    if (e.target.checked) {
      task5RefOut.current.innerHTML = task5RefInput.current.value;
    } else {
      task5RefOut.current.innerHTML = 0;
    }
  }

  function task6() {
    task6RefOut.current.textContent = task6RefSelect.current.value;
  }

  function task7() {
    task7RefDiv.current.style.backgroundColor = randomRGB();
  }

  let text8 = '';
  function task8(e) {
    if (/[0-9]/.test(e.key)) {
      text8 += 1;
    } else {
      text8 += 0;
    }
    document.querySelector('.out-8').textContent = text8;

  }
  function task9() {
    task9RefDiv.current.textContent = task9RefInput.current.value;
  }

  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(+task10RefInput.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1} >Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4} >Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} ref={task5RefInput} />
        <div className="out-5" ref={task5RefOut}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={task6RefSelect} >
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" ref={task6RefOut}></div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={task7RefDiv}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8}></input>
        <div className="out-8"></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={task9RefInput}></input>
        <div className="out-9" ref={task9RefDiv}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={task10RefInput}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
