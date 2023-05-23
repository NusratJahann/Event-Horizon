import React from "react";
import logo from '../../assets/broken_logo.svg'

const Footer = () => {
  return (
<footer className="footer p-10 flex justify-evenly flex-col sm:flex-row bg-primary">
  <div>
    <img src={logo} alt="Logo" className="w-24" />
  </div> 
  <div>
    <span className="footer-title font-serif capitalize opacity-100">Services</span> 
    <a className="link link-hover font-semibold">Branding</a> 
  </div> 
  <div>
    <span className="footer-title font-serif capitalize opacity-100">Company</span> 
    <a className="link link-hover font-semibold">About us</a> 
    <a className="link link-hover font-semibold">Contact</a> 
    <a className="link link-hover font-semibold">Venues</a> 
  </div> 
  <div>
    <span className="footer-title font-serif capitalize opacity-100">Legal</span> 
    <a className="link link-hover font-semibold">Terms of use</a> 
    <a className="link link-hover font-semibold">Privacy policy</a> 
    <a className="link link-hover font-semibold">Cookie policy</a>
  </div>
</footer>
  );
};

export default Footer;
