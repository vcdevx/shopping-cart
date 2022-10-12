import React, {useState} from "react";

const Shop = () => {

    const [inventory, setInventory] = useState([
        {
            id: 0,
            name: 'Adidas Yeezy Boost 350 V2',
            price: 220,
            image: '',
        },
        {
            id: 1,
            name: 'Adidas Yeezy Boost 450',
            price: 200,
            image: '',
        },
        {
            id: 2,
            name: 'Adidas Yeezy Boost 500',
            price: 210,
            image: '',
        },
        {
            id: 3,
            name: 'Adidas Yeezy Boost 700',
            price: 330,
            image: '',
        },
        {
            id: 4,
            name: 'Adidas Yeezy Boost 700 V2',
            price: 210,
            image: '',
        },
        {
            id: 5,
            name: 'Adidas Yeezy Boost 700 V3',
            price: 210,
            image: '',
        },
        {
            id: 6,
            name: 'Adidas Yeezy Boost 700 MNVN',
            price: 230,
            image: '',
        },
        {
            id: 7,
            name: 'Adidas Yeezy Foam Runner',
            price: 90,
            image: '',
        },
        {
            id: 8,
            name: 'Adidas Yeezy Slides ',
            price: 70,
            image: '',
        },
        {
            id: 9,
            name: 'Adidas Yeezy Knit Runner',
            price: 230,
            image: '',
        },
        {
            id: 10,
            name: 'Adidas Yeezy Knit Runner Boot',
            price: 370,
            image: '',
        },
        {
            id: 11,
            name: 'Adidas Yeezy Boost QNTM',
            price: 210,
            image: '',
        },
    ])

    return (
        <div className="container-md row row-cols-1 row-cols-md-3 g-4">
            {inventory.map((item) => (
                <div className="col">
                <div className="card" style={{width: 18 + 'rem'}} key={item.id}>
                <img src={item.image} className="card-img-top" alt={item.name}/>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{`$${item.price}`}</p>
                  <button className="btn btn-primary">Buy</button>
                </div>
              </div>     
              </div>         
            ))}
        </div>
    )
}

export default Shop;