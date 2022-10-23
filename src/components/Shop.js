import React, {useState} from "react";

const Shop = () => {

    const [inventory, setInventory] = useState([
        {
            id: 0,
            name: 'Adidas Yeezy Boost 350 V2',
            price: 220,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg',
        },
        {
            id: 1,
            name: 'Adidas Yeezy Boost 450',
            price: 200,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/601718.jpg',
        },
        {
            id: 2,
            name: 'Adidas Yeezy Boost 500',
            price: 210,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600865.jpg',
        },
        {
            id: 3,
            name: 'Adidas Yeezy Boost 700',
            price: 330,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/527125.jpg',
        },
        {
            id: 4,
            name: 'Adidas Yeezy Boost 700 V2',
            price: 210,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558185.jpg',
        },
        {
            id: 5,
            name: 'Adidas Yeezy Boost 700 V3',
            price: 210,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558187.jpg',
        },
        {
            id: 6,
            name: 'Adidas Yeezy Boost 700 MNVN',
            price: 230,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558186.jpg',
        },
        {
            id: 7,
            name: 'Adidas Yeezy Foam Runner',
            price: 90,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600876.jpg',
        },
        {
            id: 8,
            name: 'Adidas Yeezy Slide',
            price: 70,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600879.jpg',
        },
        {
            id: 9,
            name: 'Adidas Yeezy Knit Runner Boot',
            price: 400,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/598574.jpg',
        },
        {
            id: 10,
            name: 'Adidas Yeezy 350 V2 CMPCT',
            price: 220,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600901.jpg',
        },
        {
            id: 11,
            name: 'Adidas Yeezy QNTM',
            price: 210,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600859.jpg',
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