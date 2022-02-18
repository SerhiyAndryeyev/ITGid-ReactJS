import { Link } from "react-router-dom";

function Category(props) {

  const liCatList = props.nav.map(el => <li key={el.text}><Link to={"/cat" + el.link}>{el.text}</Link></li>);

  return (
    <>
      <h1>Category</h1>
      <ul>
        {liCatList}
      </ul>
    </>
  );
}

export default Category;