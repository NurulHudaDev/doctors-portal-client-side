import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {

    return (
        <footer style={{background: `url(${footer})`, backgroundSize: 'cover'}}>
  <div className='footer p-10 px-12'>
  <div>
    <span className="footer-title">SERVICES</span> 
    <a className="link link-hover">Emergency Checkup</a>
    <a className="link link-hover">Monthly Checkup</a>
    <a className="link link-hover">Weekly Checkup</a>
    <a className="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <a className="link link-hover">Fluoride Treatment</a>
    <a className="link link-hover">Cavity Filling</a>
    <a className="link link-hover">Teath Whitening</a>
  </div> 
  <div>
    <span className="footer-title">OUR ADDRESS</span> 
    <a className="link link-hover">New York - 101010 Hudson</a>
  </div>
  </div>
  <div className='text-center my-28'>
    <p>Copyright 2022 All Rights Reserved</p>
  </div>
</footer>
    )
}

export default Footer;