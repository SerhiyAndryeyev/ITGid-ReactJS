import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Footer from './Footer';
import Error from './Error';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const headerNav = [
  { 'link': '/', 'text': 'Главная' },
  { 'link': '/about', 'text': 'О сайте' },
  { 'link': '/cat', 'text': 'Категории' }
];
const categoryNav = [
  { 'link': '/notebook', 'text': 'Ноутбуки' },
  { 'link': '/monitor', 'text': 'Мониторы' },
  { 'link': '/cellphone', 'text': 'Смартфоны' }
];

function App() {
  return (
    <>
      <Router>
        <Header nav={headerNav} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cat' element={<Category nav={categoryNav} />} />
          <Route path='/cat/:categoryName' element={<CategoryDescription />} />
          <Route path='*' element={<Error />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
