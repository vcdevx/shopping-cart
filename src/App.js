import './App.css';
import React, {useState} from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import About from './components/About';
import ProductDetails from './components/collection/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
    <div className="App">
      <Nav cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount} />
      <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/shop" exact element={<Shop cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/shop/:id" exact element={<ProductDetails shoeId={9} cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/about" element={<About />}></Route>
      <Route path="/cart" exact element={<Cart cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>}></Route>
      </Routes>
      {/*<Yeezy350V2 cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>*/}
      {/*<Cart cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>*/}
    </div>
    </Router>
  );
}

export default App;
