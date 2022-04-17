import { useState } from "react";
// import CommentsListHook from "./CommentsListHook";
import Comments2ListHook from "./Comments2ListHook";

export default function Comment2Hook() {

  const [selected, setSelected] = useState([]);

  const selectHandler = (e) => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}/comments`)
      .then(response => response.json())
      .then(data => {
        setSelected(data);
        console.log(data);
      });

  };

  return (
    <div>
      <label>Choose post ID:</label>
      <select onChange={selectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        {/* <CommentsListHook data={selected} /> */}
        <Comments2ListHook data={selected} />
      </div>
    </div>
  );
}