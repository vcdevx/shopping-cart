import React, {useState} from "react";
import uniqid from 'uniqid';

const Yeezy350V2 = (props) => {

    const { cartCount, setCartCount, cartItems, setCartItems } = props;

    const [shoeData, setShoeData] = useState({
        id: uniqid(),
        name: 'Adidas Yeezy Boost 350 V2',
        price: 220,
        size: 11,
        description: '',
        quantity: 1,
    })

    const [sizeSelected, setShoeSelected] = useState({
        selected: false,
    })

    const handleAddToCart = () => {
        let item = cartItems.find(shoe => shoe === shoeData)
        if (item) {
            item.quantity += 1
            setCartItems([...cartItems.filter(shoe => shoe !== shoeData), item ])
        } else {
            setCartItems([...cartItems, shoeData])
        }
        console.log(cartItems)
    }


    return (
        <div className="container">
            <h2>{shoeData.name}</h2>
            <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
    )

}

export default Yeezy350V2;