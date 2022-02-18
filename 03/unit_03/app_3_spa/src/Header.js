import { Link } from "react-router-dom";

function Header(props) {

  const liList = props.nav.map(el => <li key={el.text} ><Link to={el.link}>{el.text}</Link></li>);

  return (
    <nav>
      <ul>
        {liList}
      </ul>
    </nav>
  );
}

export default Header;