import { useState } from "react";

export default function CommentHook() {

  const [selected, setSelected] = useState([]);

  const selectHandler = (e) => {

    fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.value + '/comments')
      .then(response => response.json())
      .then(data => {
        setSelected(data);
        console.log(data);
      });

  };

  return (
    <>
      <label> Select Post</label>
      <select onChange={selectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <h1>Comments</h1>
        {selected.map((item, i) => (
          <section key={item.id}>
            <p><b>{i + 1}. {item.email}</b></p>
            <p>{item.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}