import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {

    return (
        <footer style={{background: `url(${footer})`, backgroundSize: 'cover'}}>
  <div className='footer p-10 px-12'>
  <div>
    <span class="footer-title">SERVICES</span> 
    <a class="link link-hover">Emergency Checkup</a>
    <a class="link link-hover">Monthly Checkup</a>
    <a class="link link-hover">Weekly Checkup</a>
    <a class="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span class="footer-title">ORAL HEALTH</span> 
    <a class="link link-hover">Fluoride Treatment</a>
    <a class="link link-hover">Cavity Filling</a>
    <a class="link link-hover">Teath Whitening</a>
  </div> 
  <div>
    <span class="footer-title">OUR ADDRESS</span> 
    <a class="link link-hover">New York - 101010 Hudson</a>
  </div>
  </div>
  <div className='text-center my-28'>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
    )
}

export default Footer;