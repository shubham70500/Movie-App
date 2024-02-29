import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram ,FaYoutube,FaMusic } from 'react-icons/fa';

import './Footer.css';
 
function Footer(){
  return (
    <>
      <footer className='footer'>
        <div className='social-icons'>
           <a className='ach-footer' href="#" target="_blank" rel="noopener noreferrer">
             <FaFacebookF/>
           </a>
           <a className='ach-footer' href="#" target="_blank" rel="noopener noreferrer">
             <FaTwitter/>
           </a>
           <a className='ach-footer' href="#" target="_blank" rel="noopener noreferrer">
             <FaInstagram/>
           </a>
           <a className='ach-footer' href="#" target="_blank" rel="noopener noreferrer">
             <FaYoutube/>
           </a>
           <a className='ach-footer' href="#" target="_blank" rel="noopener noreferrer">
             <FaMusic/>
           </a>
           </div>
           <div className='footer-section'>
                 <a href='#'>Help</a>
                 <a href='#'>Site Index</a>
                 <a href='#'>StreamIT Pro</a>
                 <a href='#'>Box Office Mojo</a>
           </div>
           <div className='footer-section'>
                 <a href='#'>StreamIT Developer</a>
           </div>
           <div className='footer-section'>
                 <a href='#'>Press Room</a>
                 <a href='#'>Advertising</a>
                 <a href='#'>Jobs</a>
                 <a href='#'>Condition of Use</a>
           </div>
           <div className='footer-section'>
                 <a href='#'>Privacy Policy</a>
                 <a href='#'>Your Ads Privacy Choices</a>
           </div>
           <div className='footer-section'>
                 <a href='#'>an amazon company</a>
           </div>
           <div className="copyright">
                 <p className='para-footer'>@ 1990-2024 by StreamIT.com,Inc.</p>
           </div>
      </footer>
    </>
  );
};
 
export default Footer;