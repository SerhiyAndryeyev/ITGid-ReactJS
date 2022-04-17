import { useState, useEffect } from "react";

export default function Comments2ListHook(props) {

  const [data, setData] = useState([]);

  console.log(data);

  const onlyEven = () => {
    const a = data;
    const evenPost = a.filter((item, i) => i % 2 === 0);
    setData(evenPost);

  };

  useEffect(() => {
    console.log('effect');
    if (props.data.length > 0) setData(props.data);
  }, [props]);

  return (

    <div>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
      {data.map((el, index) => (
        <section key={el.id}>
          <p><b>{index + 1}. {el.email}</b></p>
          <p>{el.body}</p>
        </section>
      ))}
    </div>
  );
}