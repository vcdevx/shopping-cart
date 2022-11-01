import React, {useState} from "react";
import { Link } from "react-router-dom";
import Collection from "./collection/Collection.json";

const Shop = () => {

    const shoeData = Collection;

    return (
        <div className="container-fluid row row-cols-1 row-cols-md-3 g-4 mt-5">
            {shoeData.map((item) => (
                <Link key={item.id} to={`/shop/${item.id}`}>
                <div className="col">
                <div className="card" style={{width: 18 + 'rem'}} key={item.id}>
                <img src={item.img} className="card-img-top" alt={item.name}/>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{`$${item.price}`}</p>
                </div>
              </div>     
              </div>
              </Link>         
            ))}
        </div>
    )
}

export default Shop;