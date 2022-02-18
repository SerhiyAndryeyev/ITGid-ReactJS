
function Header(props) {
  const liList = props.nav.map(el => <li key={el.text} ><a href={el.link}>{el.text}</a></li>);
  return (
    <nav>
      <ul>
        {liList}
      </ul>
    </nav>
  );
}

export default Header;