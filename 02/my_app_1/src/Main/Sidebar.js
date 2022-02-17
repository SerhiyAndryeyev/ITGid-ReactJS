import Nav from "../Header/Nav";

function Sidebar(props) {
  return (
    <>
      <Nav nav={props.site.nav}></Nav>
      <ul>
        <li>Страница 1</li>
        <li>Страница 2</li>
        <li>Страница 3</li>
      </ul>
    </>
  );
}

export default Sidebar;