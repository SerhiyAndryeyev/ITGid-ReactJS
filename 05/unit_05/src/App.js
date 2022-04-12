import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  const [st1, setSt1] = useState('');
  const [st2, setSt2] = useState(0);
  const [st3, setSt3] = useState('');
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState(0);
  const [st6, setSt6] = useState('');
  const [st7, setSt7] = useState(0);
  const [st8, setSt8] = useState('');
  const [st9, setSt9] = useState(0);
  const [st10, setSt10] = useState([]);

  const ref5 = React.createRef();

  function task1() {
    setSt1(document.querySelector('.task-1-inp').value);
  }

  function task2() {
    let st2Change = st2;
    st2Change++;
    setSt2(st2Change);
  }

  function task3() {
    setSt3(document.querySelector('.task-3').value);
  }

  function task4() {
    let st4Change = st4;
    st4Change++;
    setSt4(st4Change);
  }

  function task5() {
    let newSt5 = 0;
    if (ref5.current.checked) {
      newSt5 = ref5.current.value;
    }
    setSt5(newSt5);
  }

  function task6() {
    const newSt6 = document.querySelector('.task-6').value;
    setSt6(newSt6);

  }

  const randomInt = () => Math.floor(Math.random() * 256);

  function task7() {
    const newSt7 = randomInt();
    document.querySelector('.block-7').style.backgroundColor = `rgb(${newSt7},${newSt7},${newSt7})`;
    setSt7(newSt7);
  }


  function task8(e) {
    let newSt8 = st8;
    if (/[0-9]/.test(e.key)) {
      newSt8 += 1;
    } else {
      newSt8 += 0;
    }
    setSt8(newSt8);
  }

  function task9() {
    const newST9 = document.querySelector('.task-9').value;
    setSt9(newST9);
  }

  function task10() {
    const value10 = document.querySelector('.i-10').value;
    const newSt10 = [...st10, value10];
    setSt10(newSt10);
    document.querySelector('.i-10').value = '';
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" className="task-1-inp" />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} ref={ref5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7"></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
