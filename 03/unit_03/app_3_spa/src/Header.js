import { NavLink } from "react-router-dom";

function Header(props) {

  const liList = props.nav.map(el => <li key={el.text} ><NavLink to={el.link}>{el.text}</NavLink></li>);

  return (
    <nav>
      <ul>
        {liList}
      </ul>
    </nav>
  );
}

export default Header;