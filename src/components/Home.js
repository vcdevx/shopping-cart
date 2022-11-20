import React from "react";
import YeezySplash from '../images/Yeezy9Splash.webp';
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="Home container container-fluid d-flex justify-content-center align-items-center my-5">
            <Link className="nav-link" to="/shop">
            <img className="splash img-fluid" src={YeezySplash}/>
            </Link>
        </div>
    )
}

export default Home;