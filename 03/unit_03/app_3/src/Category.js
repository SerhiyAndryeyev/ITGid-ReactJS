
function Category(props) {
  const liCategoryList = props.nav.map(el => <li key={el.text} > <a href={'/cat' + el.link}>{el.text}</a></li >);
  return (
    <>
      <h1>Category</h1>
      <ul>
        {liCategoryList}
      </ul>
    </>
  );
}

export default Category;