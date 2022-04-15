import React from 'react';
import './App.css';
import Goods from './Goods';
import Cart from './Cart';
import goodsArr from './assets/goods.json';
import { useState } from 'react';

function App() {
  // states:
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  const addToCart = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('add-to-cart')) return false;
    let cartTemp = cart;
    cartTemp[event.target.dataset.key]
      ? cartTemp[event.target.dataset.key]++
      : cartTemp[event.target.dataset.key] = 1;
    setCart(cartTemp);
    let countTemp = count;
    countTemp++;
    setCount(countTemp);
  };


  let showCart = '';
  if (count !== 0) {
    showCart = <Cart cart={cart} goods={goodsArr} />;
  }
  else {
    showCart = 'Empty';
  }

  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="goods-field" onClick={addToCart}>
        {goodsArr.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} />)}
      </div>
      {showCart}
    </div>
  );

}

export default App;
