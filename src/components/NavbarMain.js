import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AdiLogo from "../images/AdiLogo.png";
import { Link } from "react-router-dom";

const NavbarMain = (props) => {
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
    <Navbar bg="light" expand="md">
        <Container fluid>
          <Navbar.Brand>
          <Link className="navbar-brand" to="/">
              <img src={AdiLogo} alt="Yeezy Logo" width="64" height="" />
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link className="nav-link active" aria-current="page" to="/">
            <li className="nav-item">
                Home
            </li>
            </Link>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                  Shop
              </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/cart">
                <i className="fa-solid fa-lg fa-bag-shopping"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  {cartCount}
                </span>
              </Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default NavbarMain;
