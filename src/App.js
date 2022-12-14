import './App.css';
import React, {useState} from 'react';
import Nav from './components/NavbarMain'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Ticker from './components/Ticker'
import ProductDetails from './components/collection/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
    <div className="App">
      <Nav cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount} />
      <Ticker/>
      <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/shop" exact element={<Shop cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/shop/:id" exact element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/cart" exact element={<Cart cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
