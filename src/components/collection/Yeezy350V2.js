import React, { useState } from "react";
import uniqid from "uniqid";

const Yeezy350V2 = (props) => {
  const { cartCount, setCartCount, cartItems, setCartItems } = props;

  const [shoeData, setShoeData] = useState({
    id: uniqid(),
    name: "Adidas Yeezy Boost 350 V2",
    price: 220,
    size: 11,
    description:
      "The YEEZY BOOST 350 V2 features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper. Reflective threads are woven into the laces. The midsole utilizes adidas’ innovative BOOST™ technology.",
    quantity: 1,
  });

  const [sizeSelected, setSizeSelected] = useState(false);

  const handleAddToCart = () => {
    let item = cartItems.find(
      (shoe) => shoe.name === shoeData.name && shoe.size === shoeData.size
    );
    if (item) {
      console.log(item.name);
      item.quantity += 1;
      setCartItems([...cartItems.filter((shoe) => shoe !== item), item]);
    } else {
      setShoeData({ ...shoeData, id: uniqid() });
      setCartItems([...cartItems, shoeData]);
    }

    updateCartCount();
  };

  const handleSizeChange = (e) => {
    
    let newSize = parseInt(e.target.value);
    setShoeData({ ...shoeData, size: newSize });
    toggleSizeSelect();
  };

  const toggleSizeSelect = () => {
    if (sizeSelected === false) {
      setSizeSelected(true);
    }
  };

  const toggleActiveSize = (e) => {

    
    if (!e.target.classList.contains('active')) {
      e.target.classList.add('active')
    }
  }

  const updateCartCount = () => {
    let totalItems = 0;
    for (let i = 0; cartItems.length > i; i++) {
      totalItems += cartItems[i].quantity;
    }

    setCartCount(totalItems);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg" />
        </div>
        <div className="container-fluid col-md-4 justify-content-sm-center">
          <h2 className="mb-4">{shoeData.name}</h2>
          <h4 className="mb-4">${shoeData.price}</h4>
          <div className="container">
          <h5>Select Size</h5>
          <label className="btn btn-block btn-outline-dark m-2 sizeBtn">
            <input onClick={handleSizeChange} type="radio" name="size" id="size4" value={4} /> 4 US
          </label>
          <label className="btn btn-block btn-outline-dark m-2 sizeBtn">
            <input onClick={handleSizeChange} type="radio" name="size" id="size5" value={5}/> 5 US
          </label>
          <label className="btn btn-block btn-outline-dark m-2 sizeBtn">
            <input onClick={handleSizeChange} type="radio" name="size" id="size6" value={6}/> 6 US
          </label>
          <label className="btn btn-block btn-outline-dark m-2 sizeBtn">
            <input onClick={handleSizeChange} type="radio" name="size" id="size7" value={7}/> 7 US
          </label>
          </div>
          <div className="container">
          <button onClick={handleSizeChange} value={8} key={8} className="btn btn-block btn-outline-dark m-2 sizeBtn">8 US</button>
          <button onClick={handleSizeChange} value={9} key={9} className="btn btn-block btn-outline-dark m-2 sizeBtn">9 US</button>
          <button onClick={handleSizeChange} value={10} key={10} className="btn btn-block btn-outline-dark m-2 sizeBtn">10 US</button>
          <button onClick={handleSizeChange} value={11} key={11} className="btn btn-block btn-outline-dark m-2 sizeBtn">11 US</button>
          </div>
          <div className="container">
          <button onClick={handleSizeChange} value={12} key={12} className="btn btn-outline-dark m-2 sizeBtn">12 US</button>
          <button onClick={handleSizeChange} value={13} key={13} className="btn btn-outline-dark m-2 sizeBtn">13 US</button>
          <button onClick={handleSizeChange} value={14} key={14} className="btn btn-outline-dark m-2 sizeBtn">14 US</button>
          <button onClick={handleSizeChange} value={15} key={15} className="btn btn-outline-dark m-2 sizeBtn">15 US</button>
          </div>
          <button onClick={handleAddToCart} className="btn btn-block btn-dark mt-4">Add To Bag</button>
          <p className="mt-4">{shoeData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Yeezy350V2;
