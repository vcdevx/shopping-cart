import React, {useState} from "react";

const Cart = (props) => {

    const {cartItems, setCartItems, cartCount, setCartCount} = props;

    return (
        <div className="container-fluid">
            <h2>Shopping Bag</h2>
            <div className="container">
                {cartItems.map((item) => (
                    <div className="card" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;