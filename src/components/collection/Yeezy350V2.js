import React, {useState} from "react";
import uniqid from 'uniqid';

const Yeezy350V2 = (props) => {

    const { cartCount, setCartCount, cartItems, setCartItems } = props;

    const [shoeData, setShoeData] = useState({
        id: uniqid(),
        name: 'Adidas Yeezy Boost 350 V2',
        price: 220,
        size: 11,
        description: "The YEEZY BOOST 350 V2 features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper. Reflective threads are woven into the laces. The midsole utilizes adidas’ innovative BOOST™ technology.",
        quantity: 1,
    })

    const [sizeSelected, setSizeSelected] = useState(false)

    const handleAddToCart = () => {
        let item = cartItems.find(shoe => shoe.name === shoeData.name && shoe.size === shoeData.size)
        if (item) {
            console.log(item.name)
            item.quantity += 1
            setCartItems([...cartItems.filter(shoe => shoe !== item), item ])
        } else {
            setShoeData({...shoeData, id: uniqid()})
            setCartItems([...cartItems, shoeData])
        }

        updateCartCount()
    }

    const handleSizeChange = (e) => {
        console.log(e.target.value)
        let newSize = parseInt(e.target.value);
        setShoeData({...shoeData, size: newSize})
        toggleSizeSelect();
    }

    const toggleSizeSelect = () => {
        if (sizeSelected === false) {
        setSizeSelected(true)
        }
    }

    const displaySizes = () => {
        const sizes = [4,5,6,7,8,9,10,11,12,13,14]

        return sizes.map(size => (
             <button onClick={handleSizeChange} value={size} key={size}>{size}</button>
        ))
    }

    const updateCartCount = () => {
        let totalItems = 0;
        for (let i = 0; cartItems.length > i; i++) {
            totalItems += cartItems[i].quantity
        }
        
        setCartCount(totalItems)
    }


    return (
        <div className="container">
            <h2>{shoeData.name}</h2>
            <button onClick={handleAddToCart}>Add To Cart</button>
            <div>
                {displaySizes()}
            </div>
        </div>
    )

}

export default Yeezy350V2;