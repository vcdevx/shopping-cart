import React, {useState, useEffect} from "react";

const Cart = (props) => {

    const {cartItems, setCartItems, cartCount, setCartCount} = props;

    const [total, setTotal] = useState('')

    useEffect(() => {
        updateCartCount()
        updateTotal()
    })

    const updateCartCount = () => {
        let totalItems = 0;
        for (let i = 0; cartItems.length > i; i++) {
            totalItems += cartItems[i].quantity
        }

        setCartCount(totalItems)
    }

    const updateTotal = () => {
        let total = 0;
        for (let i = 0; cartItems.length > i; i++) {
            total = total + (cartItems[i].quantity * cartItems[i].price)
        }

        setTotal(total)
    }

    const removeItem = (e) => {
        let key = e.target.getAttribute('id')
        let item = cartItems.find(shoe => shoe.id === key)
        let newCart = [...cartItems.filter(shoe => shoe !== item)]
        setCartItems(newCart)
        console.log(cartItems)
    }

    return (
        <div className="container-fluid">
            <h2>Shopping Bag</h2>
            <div className="container">
                {cartItems.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="row">
                            <div className="col">
                                <img src='https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg'/>
                                </div>
                                <div className="col">
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                        <p>Quantity: {item.quantity}</p>
                        </div>
                        <button onClick={removeItem} id={item.id}>Remove</button>
                        </div>
                    </div>
                ))}
                <p>Total Items: {cartCount}</p>
                <p>Total: ${total}</p>
            </div>
        </div>
    )
}

export default Cart;