import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <ul>
            <li><Link  to ="/faqs">FAQs</Link></li>
            <li><Link  to ="/about">About Us</Link></li>
            <li><Link  to ="/contact">Contact Us</Link></li>
            <li><Link  to ="/complaints">Complaints</Link></li>
            <li><Link  to ="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-center">
          <h3>Registered Office Address</h3>
          <address>
            Chunar Pottery House <br />
            Heritage Plaza, Near Fort Road, <br />
            Chunar, Mirzapur, Uttar Pradesh, 231304 <br />
            Email: <a href="mailto:contact@chunarpottery.store">contact@chunarpottery.store</a> <br />
            Phone: <a href="tel:+919876543210">+91-9876543210</a>
          </address>
        </div>
        <div className="footer-right">
          <img src="src\components\footer.png" alt="ODOP Logo" className="footer-logo" />
        
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 ChunarPottery.Store – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;