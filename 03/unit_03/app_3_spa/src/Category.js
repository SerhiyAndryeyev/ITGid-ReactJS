import { NavLink } from "react-router-dom";

function Category(props) {

  const liCatList = props.nav.map(el => <li key={el.text}><NavLink to={"/cat" + el.link}>{el.text}</NavLink></li>);

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