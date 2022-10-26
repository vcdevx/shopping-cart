import React, {useState} from "react";
import { Link } from "react-router-dom";

const Shop = () => {

    const [inventory, setInventory] = useState([
        {
            id: 'Yeezy350V2',
            name: 'Adidas Yeezy Boost 350 V2',
            price: 220,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg',
        },
        {
            id: 'Yeezy450',
            name: 'Adidas Yeezy Boost 450',
            price: 200,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/601718.jpg',
        },
        {
            id: 'Yeezy500',
            name: 'Adidas Yeezy Boost 500',
            price: 210,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600865.jpg',
        },
        {
            id: 'Yeezy700',
            name: 'Adidas Yeezy Boost 700',
            price: 330,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/527125.jpg',
        },
        {
            id: 'Yeezy700V2',
            name: 'Adidas Yeezy Boost 700 V2',
            price: 210,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558185.jpg',
        },
        {
            id: 'Yeezy700V3',
            name: 'Adidas Yeezy Boost 700 V3',
            price: 210,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558187.jpg',
        },
        {
            id: 'Yeezy700MNVN',
            name: 'Adidas Yeezy Boost 700 MNVN',
            price: 230,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558186.jpg',
        },
        {
            id: 'YeezyFoamRunner',
            name: 'Adidas Yeezy Foam Runner',
            price: 90,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600876.jpg',
        },
        {
            id: 'YeezySlide',
            name: 'Adidas Yeezy Slide',
            price: 70,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600879.jpg',
        },
        {
            id: 'YeezyKnitRunner',
            name: 'Adidas Yeezy Knit Runner Boot',
            price: 400,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/598574.jpg',
        },
        {
            id: 'YeezyV2CMPCT',
            name: 'Adidas Yeezy 350 V2 CMPCT',
            price: 220,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600901.jpg',
        },
        {
            id: 'YeezyQNTM',
            name: 'Adidas Yeezy QNTM',
            price: 210,
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/600859.jpg',
        },
    ])

    return (
        <div className="container-fluid row row-cols-1 row-cols-md-3 g-4 mt-5">
            {inventory.map((item) => (
                <Link to={`/shop/${item.id}`}>
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
              </Link>         
            ))}
        </div>
    )
}

export default Shop;