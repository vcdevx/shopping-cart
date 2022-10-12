import React from "react";
import YZY from '../images/YZY.png';

const Nav = () => {
    return (
            <nav className="Nav navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navBarSupportedContent">
                        <a className="navbar-brand" href="#">
                            <img src={YZY} alt="Yeezy Logo" width="66" height="20"/>
                        </a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Nav;