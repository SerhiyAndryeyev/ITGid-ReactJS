import React, { useEffect, useState } from 'react';

function PlaceholderPostHook() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      .then(text => {
        setData(text);
      });
  }, []);

  return (
    <>
      {
        data.map((item, i) =>
        (
          <section key={item.id}>
            <h2>Post #{i + 1} Title: {item.title}</h2><p>{item.body}</p>
          </section>)
        )
      }

    </>
  );

}

export default PlaceholderPostHook;