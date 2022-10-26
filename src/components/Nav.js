import React, { useEffect } from "react";
import YZY from "../images/YZY.png";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { cartCount, setCartCount, cartItems, setCartItems } = props;

  useEffect(() => {
    updateCartCount();
  });

  const updateCartCount = () => {
    let totalItems = 0;
    for (let i = 0; cartItems.length > i; i++) {
      totalItems += cartItems[i].quantity;
    }

    setCartCount(totalItems);
  };

  return (
    <nav className="Nav navbar navbar-expand-md bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navBarSupportedContent">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img src={YZY} alt="Yeezy Logo" width="66" height="20" />
            </a>
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link to="/">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              
            </li>
            </Link>
            <li className="nav-item">
              <Link to="/shop">
                <a className="nav-link" href="#">
                  Shop
                </a>{" "}
              </Link>
            </li>
            <li className="nav-item">
                <Link to="/about">
              <a className="nav-link" href="#">
                About
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa-solid fa-lg fa-bag-shopping"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  {cartCount}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
