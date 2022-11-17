import React, { useState, useEffect } from "react";

const Cart = (props) => {
  const { cartItems, setCartItems, cartCount, setCartCount } = props;

  const [total, setTotal] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [tax, setTax] = useState("--");

  useEffect(() => {
    updateCartCount();
    updateSubTotal();
    updateTotal();
  });

  const updateCartCount = () => {
    let totalItems = 0;
    for (let i = 0; cartItems.length > i; i++) {
      totalItems += cartItems[i].quantity;
    }

    setCartCount(totalItems);
  };

  const updateSubTotal = () => {
    let newTotal = 0;
    for (let i = 0; cartItems.length > i; i++) {
      newTotal = newTotal + cartItems[i].quantity * cartItems[i].price;
    }

    setTotal(newTotal);
  };

  const updateTotal = () => {
    let newSubTotal = total;

    setSubTotal(newSubTotal);
  };

  const removeItem = (e) => {
    let key = e.target.getAttribute("id");
    let item = cartItems.find((shoe) => shoe.shoeId === key);
    let newCart = [...cartItems.filter((shoe) => shoe !== item)];
    setCartItems(newCart);
  };

  const checkOut = (e) => {
    alert('Thanks for checking out my app!')
  }

  return (
    <div className="container-fluid row mt-5 d-flex justify-content-center">
      <div className="container col-md-8 mb-5">
        <h4>Bag</h4> <p className="text-secondary">Items {cartCount}</p>
        {cartItems.map((item) => (
          <div className="border-top border-bottom" key={item.shoeId}>
            <div className="row">
              <div className="container col-md-4">
                <img src={item.img} class="img-fluid p-3" />
              </div>
              <div className="col-md-5 p-3">
                <p className="mb-2 text-md-start">{item.name}</p>
                <p className="text-secondary m-0 text-md-start">
                  Size: {item.size}
                </p>
                <p className="text-secondary text-md-start">
                  QTY: {item.quantity}
                </p>
                <p className="text-md-start">
                  <i
                    className="fa-solid fa-trash btn p-0"
                    onClick={removeItem}
                    id={item.shoeId}
                  ></i>
                </p>
              </div>
              <div className="col-md-3 mt-3">
                <p className="text-md-end">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container col-md-4">
        <h4 className="mb-4">Summary</h4>
        <div className="container-fluid">
          <div className="row">
            <div className="col container-fluid">
              <p className="text-start">Subtotal</p>
            </div>
            <div className="col container-fluid">
              <p className="text-end">${subTotal}</p>
            </div>
          </div>
          <div className="row">
            <div className="col container-fluid">
              <p className="text-start">Estimated Shipping & Handling</p>
            </div>
            <div className="col container-fluid">
              <p className="text-end">Free</p>
            </div>
          </div>
          <div className="row">
            <div className="col container-fluid">
              <p className="text-start">Taxes</p>
            </div>
            <div className="col container-fluid">
              <p className="text-end">{tax}</p>
            </div>
          </div>
        </div>
        <div className="container-fluid border-top border-bottom">
          <div className="row">
            <div className="col-6 pt-3">
              <p className="text-start">Total</p>
            </div>
            <div className="col-6 pt-3">
              <p className="text-end">${total}</p>
            </div>
          </div>
        </div>
        <div className="container-fluid my-4">
          <button className="btn btn-dark btn-lg btn-block m-0 col-12" onClick={checkOut}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
