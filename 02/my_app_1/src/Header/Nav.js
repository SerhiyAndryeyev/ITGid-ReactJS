import { Simulate } from "react-dom/cjs/react-dom-test-utils.production.min";

// function Nav(props) {
//   return (
//     <nav>
//       <ul className="main-navigation">
//         {props.nav.map(el => <li key={el.text}><a href={el.link}>{el.text}</a></li>)}
//       </ul>
//     </nav>
//   );
// }

function Nav(props) {
  const liItems = props.nav.map(el => <li key={el.text}><a href={el.link}>{el.text}</a></li>);
  return (
    <nav>
      <ul className="main-navigation">
        {liItems}
      </ul>
    </nav>
  );
}

export default Nav;