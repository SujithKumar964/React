import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Stock1 from './images/stock2.jpg';
import Stock2 from './images/stock1.jpeg';
import './Home.css';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className="d-none d-md-block">
        <div id="carouselExampleControls" className="carousel slide bg-dark" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active mt-4">
              <img src={Stock1} className="d-block" height="600" alt="..."/>
            </div>
            <div className="carousel-item mt-4">
              <img src={Stock2} className="d-block" height="600" alt="..."/>
            </div>
          </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      <section className="importance bg-dark text-light pt-5 px-5">
        <h2 className="pt-5">Welcome To <span className="text-warning">Career Guru</span></h2>
         <span className="text-info">
             Career Guru, the established career mentor of the new era, is a full-fledged career solution provider based in Telangana with years of satisfaction nationally and internationally. Understanding the most surging needs for directing the new generation students to a desirable career in a world of sweeping changes, we have adopted an exemplary mission of leading the students into a bright future by giving them proper direction, bolstering their confidence and instilling the power of self-esteem in them. To reinvigorate their entity and make them prepared for the competitive world We adopt various methods of aptitude tests and intensive counselling programmes. By means of exclusive career mentoring and career counselling manners Career Guru takes up the most demanding responsibility of each student’s educational development and his career planning from the very outset with a special focus on comprehensive achievement.
         </span>
     </section>
      <section className="bg-dark text-dark">
        <div className="container-fluid">
            <div className="row p-5 justify-content-between">
                <div className="card col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">2 +</h5>
                    <span className="para">Years of experience</span>
                  </div>
                </div>
                  <div className="card col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">1 LAKH +</h5>
                      <span className="para">Beneficiaries</span>
                    </div>
                  </div>
                  <div className="card col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">50 +</h5>
                      <span className="para">Companies</span>
                    </div>
                  </div>
            </div>
        </div>
        <div className="button">
        <NavLink type="button" to="Signup" className="btn btn-primary btn-lg">Get Started <i className="fa-solid fa-arrow-right"></i></NavLink>
        </div>
      </section>
      <Footer/>
      </div>
  )
}

export default Home