import './App.css';
import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartProvider';

function App() {
  const [isCartShown,setIsCartShown]=useState(false);

  const cartShownHandler=()=>{
    setIsCartShown(true);
  };
  const hideCartHandler=()=>{
    setIsCartShown(false);
  };
  console.log('Control in App.js')
  return <CartProvider>
          {isCartShown && <Cart onHideCart={hideCartHandler} />}
          <Header onShownCart={cartShownHandler}></Header>
          <main>
          <Meals></Meals>
          </main>
  </CartProvider>
}

export default App;
