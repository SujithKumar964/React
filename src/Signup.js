import React from "react";
import { NavLink } from "react-router-dom";
import Signupimg from "./images/signup_img.jpg";
import Navbar from './Navbar';

function Signup(){
    return(
        <>
        <Navbar/>
        <section className="100vh" style={{backgroundColor:"#eee"}}>
        <div className="container" style={{backgroundColor: "white"}}>
            <div className="row d-flex justify-content-center align-items-center">
            
                    <div className="col-md-6 d-flex align-items-center justify-content-center">

                        <img src={Signupimg}className="img-fluid" alt="signupimg"/>

                    </div>
                    <div className="col-md-6 col-sm-8">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                            </div>
                        </div>


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-lg">Register</button>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                            <NavLink to="/Login">I am already a member</NavLink>
                        </div>

                        </form>

                    </div>
                    
                    </div>
                </div>
        </section>
        </>
    );
}
export default Signup;