import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-5 d-md-flex">
      <p>@Copyright 2022 <span className="text-warning">SUJITH</span> .All Rights Reserved</p>
      <div className="social ms-auto">
        <i className="fa-brands fa-facebook px-3"></i>
        <i className="fa-brands fa-twitter px-3"></i>
        <i className="fa-brands fa-square-youtube px-3"></i>
      </div>
    </footer>
  )
}

export default Footer