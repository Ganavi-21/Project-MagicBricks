import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';


const Footer = () => {
  return (
    <footer className="footer-container" style={{marginTop:"20px"}} >
      <div className="footer-section">
        <div className="footer-content">
          <h3>About Magicbricks</h3>
          <p>Magicbricks is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings.</p>
          <h3>More from our Network</h3>
          <ul>
            <li><a href='#'>Times of India</a></li>
            <li><a href='#'>Economic Times</a></li>
            <li><a href='#'>Navbharat times</a></li>
            <li><a href='#'>India Times</a></li>
          </ul>
          <div className="contact-icons">
            <a href="https://www.youtube.com/user/magicbricksvideo" target="_blank"><i className="bx bxl-youtube"></i></a>
            <a href="https://www.facebook.com/magicbricks" target="_blank"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/magicbricks_official/" target="_blank"><i className="bx bxl-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h3>Properties</h3>
        <span>Property in Indiranagar</span> |
        <span>Property in Koramangala</span> |
        <span>Property in Whitefield</span> |
        <span>Property in USA</span>
      </div>
    </footer>
  );
};

export default Footer;
