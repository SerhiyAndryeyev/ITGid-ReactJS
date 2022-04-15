import './App.css';
import React from 'react';
import { useState } from 'react';
import { createRef } from 'react';
import List from './List';

function App() {

  const h1 = React.createElement('h1', {}, 'unit_08');
  const h2 = React.createElement('h2', { 'className': 'text-orange' }, 'header2');
  const p = React.createElement('p', { 'style': { 'color': 'red' } }, 'this is p');
  const input = React.createElement('input', { 'value': '55', 'readOnly': true });
  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');
  const div = React.createElement('div', { 'className': 'text-grey' }, p1, p2);

  const [list, setList] = useState([]);
  const inputRef = React.createRef();

  const createList = () => {
    if (!inputRef.current.value) return false;
    let tempList = [...list, inputRef.current.value];
    setList(tempList);
    console.log('tempList: ', tempList);
    console.log('list: ', list);

    inputRef.current.value = '';
  };

  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {input}
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={createList}>Push</button>
        <ul>
          <List arr={list} />
          {/* {list.map(item => <li key={item} >{item}</li>)} */}
        </ul>
      </div>
    </>
  );
}

export default App;
