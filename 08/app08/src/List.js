function List(props) {
  let keyIndex = 1;
  return (
    props.arr.map(item => <li key={item + `${++keyIndex}`}>{item}</li>)
  );
}

export default List;