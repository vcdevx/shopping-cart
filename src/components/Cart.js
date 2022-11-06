import React, { useState, useEffect } from "react";

const Cart = (props) => {
  const { cartItems, setCartItems, cartCount, setCartCount } = props;

  const [total, setTotal] = useState("");

  useEffect(() => {
    updateCartCount();
    updateTotal();
  });

  const updateCartCount = () => {
    let totalItems = 0;
    for (let i = 0; cartItems.length > i; i++) {
      totalItems += cartItems[i].quantity;
    }

    setCartCount(totalItems);
  };

  const updateTotal = () => {
    let total = 0;
    for (let i = 0; cartItems.length > i; i++) {
      total = total + cartItems[i].quantity * cartItems[i].price;
    }

    setTotal(total);
  };

  const removeItem = (e) => {
    let key = e.target.getAttribute("id");
    let item = cartItems.find((shoe) => shoe.shoeId === key);
    let newCart = [...cartItems.filter((shoe) => shoe !== item)];
    setCartItems(newCart);
  };

  return (
    <div className="container-fluid row mt-5">
      <div className="container col-sm-6">
      <h4>Bag</h4>
        {cartItems.map((item) => (
          <div className="border-top border-bottom" key={item.shoeId}>
            <div className="row">
              <div className="col-sm-3">
                <img src={item.img} class="img-fluid p-3" />
              </div>
              <div className="col-sm-6 p-3">
                <p>{item.name}</p>
                <p className="text-secondary">Size: {item.size}</p>
                <p className="text-secondary">QTY: {item.quantity}</p>
              </div>
              <div className="col-sm-3 mt-3">
                <p>${item.price}</p>
              </div>
              <button onClick={removeItem} id={item.shoeId}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container col-sm-3 ">
        <h4>Summary</h4>
        <p>Total Items: {cartCount}</p>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default Cart;
