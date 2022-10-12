import './App.css';
import React, {useState} from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Yeezy350V2 from './components/collection/Yeezy350V2';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Yeezy350V2 cartItems={cartItems} setCartItems={setCartItems}/>
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default App;
