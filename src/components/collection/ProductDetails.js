import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Collection from './Collection.json';
import uniqid from "uniqid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = (props) => {

    const [sizeSelected, setSizeSelected] = useState(false);

    const {cartItems, setCartItems, setCartCount} = props;
    let { id } = useParams();

    let shoeData = Collection.find((i) => i.id == id);

    const handleAddToCart = (e) => {
        handleSizeChange(e)
        console.log(shoeData)
        let item = cartItems.find(
          (shoe) => shoe.name === shoeData.name && shoe.size === shoeData.size
        );
        if (item) {
          console.log(item.name);
          item.quantity += 1;
          setCartItems([...cartItems.filter((shoe) => shoe !== item), item]);
        } else {
          shoeData = { ...shoeData, shoeId: uniqid() };
          setCartItems([...cartItems, shoeData]);
        }

        setSizeSelected(false);
        notify();
        updateCartCount();
      };
    
      const handleSizeChange = (e) => {
        
        let newSize = parseInt(sizeSelected);
        shoeData = { ...shoeData, size: newSize };
        toggleSizeSelect(e);
      };
    
      const toggleSizeSelect = (e) => {
        let newSize = parseInt(e.target.value);
        setSizeSelected(newSize)
      };
    
      let toggleActiveSize = (e) => {
        if (!e.target.classList.contains('active')) {
          e.target.classList.add('active')
        }
      }
    
      const updateCartCount = () => {
        let totalItems = 0;
        for (let i = 0; cartItems.length > i; i++) {
          totalItems += cartItems[i].quantity;
        }
    
        setCartCount(totalItems);
      };
    
      const notify = ()=>{
    
        toast(`${shoeData.name} added to cart!`)
    }

    return (
    <div className="container mt-5">
      <ToastContainer autoClose={500} theme="dark"/>
      <div className="row">
        <div className="col-md-6">
          <img src={shoeData.img} />
        </div>
        <div className="container-fluid col-md-4 justify-content-sm-center">
          <h2 className="mb-4">{shoeData.name}</h2>
          <h4 className="mb-4">${shoeData.price}</h4>
          <div className="container">
          <h5>Select Size</h5>
          <button onClick={handleSizeChange} value={4} key={4} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 4 ? "active" : ""}`}>4 US</button>
          <button onClick={handleSizeChange} value={5} key={5} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 5 ? "active" : ""}`}>5 US</button>
          <button onClick={handleSizeChange} value={6} key={6} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 6 ? "active" : ""}`}>6 US</button>
          <button onClick={handleSizeChange} value={7} key={7} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 7 ? "active" : ""}`}>7 US</button>
          </div>
          <div className="container">
          <button onClick={handleSizeChange} value={8} key={8} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 8 ? "active" : ""}`}>8 US</button>
          <button onClick={handleSizeChange} value={9} key={9} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 9 ? "active" : ""}`}>9 US</button>
          <button onClick={handleSizeChange} value={10} key={10} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 10 ? "active" : ""}`}>10 US</button>
          <button onClick={handleSizeChange} value={11} key={11} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 11 ? "active" : ""}`}>11 US</button>
          </div>
          <div className="container">
          <button onClick={handleSizeChange} value={12} key={12} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 12 ? "active" : ""}`}>12 US</button>
          <button onClick={handleSizeChange} value={13} key={13} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 13 ? "active" : ""}`}>13 US</button>
          <button onClick={handleSizeChange} value={14} key={14} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 14 ? "active" : ""}`}>14 US</button>
          <button onClick={handleSizeChange} value={15} key={15} className={`btn btn-block btn-outline-dark m-2 sizeBtn ${sizeSelected === 15 ? "active" : ""}`}>15 US</button>
          </div>
          <button onClick={handleAddToCart} className="btn btn-block btn-dark mt-4" disabled={sizeSelected === false}>Add To Bag</button>
          <p className="mt-4">{shoeData.description}</p>
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;