import React from 'react'
import Navbar from './Navbar';
import Profile from './images/profile.png';
const Login = () => {
  return (
    <div>
      <Navbar/>
      <div id="form" className="d-flex">
        <div className="container bg-light text-dark p-4" style={{maxWidth:600}}>
          <center><img src={Profile} alt="admin"/></center>
          <div className="form-group my-3">
            <label className="my-2" for="exampleInputEmail1">Email address</label>
            <input type="email" className="my-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group my-3">
            <label className="my-2" for="exampleInputPassword1">Password</label>
            <input type="password" className=" my-2 form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-check my-3">
            <input type="checkbox" className="form-check-input my-2" id="exampleCheck1"/>
            <label className="form-check-label my-1" for="exampleCheck1">Remember me</label>
          </div>
          <center><a href="dashboard.html"><button type="button" className="btn btn-success">Login</button></a></center>
        </div>
      </div>
    </div>
  )
}

export default Login