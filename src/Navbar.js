import React from 'react'
import Logocareer from './images/Logocareer.png';
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-lg-4 Sticky-top">
        <div className="container-fluid">
          <img  src={Logocareer} alt="Career Guru" width="70" height="50"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active px-lg-4" href="index.html"><i className="fa-solid fa-house"></i>{'\u00A0'}Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link px-lg-4" href="aboutus.html"><i className="fa-solid fa-address-card"></i>{'\u00A0'}About Us</a>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link px-lg-4" href="login.html"><i className="fa-solid fa-arrow-right-to-bracket"></i>{'\u00A0'}Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link px-lg-4" href="#"><i className="fa-solid fa-user-plus"></i>{'\u00A0'}Sign Up</a>
                </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default navbar