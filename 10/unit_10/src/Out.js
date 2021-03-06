// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectValue, selectText } from './app/taskReducerSlice';

export default function Out() {
  const task1 = useSelector(selectValue); // получаем данные из store
  const textOut = useSelector(selectText);

  return (
    <div>
      <hr />
      <h2>Task 1</h2>
      <p>{task1}</p>
      <p>{textOut}</p>
      <br />
    </div>

  );
}