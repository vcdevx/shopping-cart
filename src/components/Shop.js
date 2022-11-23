import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collection from "./collection/Collection.json";

const Shop = () => {
  const shoeData = Collection;

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mt-5 d-flex justify-content-center align-items-center med-box container-fluid">
      {shoeData.map((item) => (
        <div className="col-12">
            <div className="card border-light mb-4" key={item.id}>
            <Link
            key={item.id}
            to={`/shop/${item.id}`}
            style={{ textDecoration: "none" }}
          >
              <img src={item.img} className="card-img-top img-fluid" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{`$${item.price}`}</p>
              </div>
              </Link>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Shop;
