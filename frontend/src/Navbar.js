import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <div class="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDregZhssK4nISId8PI7jJH0l4DWuchtrCYJcOwdeTm8kvqNAbu8l382UdtcjTDwLz9z4&usqp=CAU"
              style={{ height: '50px', width: '60px' }}
              alt="Logo"
            ></img>
          </div>
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontFamily: '-moz-initial' }}
          >
            . Ara's Food Delights
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CreateUser">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Your Cart 🛒
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
