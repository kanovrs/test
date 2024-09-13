import React from 'react';
import FooterIcons from './FooterIcons'
import './Footer.scss';


const Footer = () => {
  return (
    
    <footer className="footer">
      <FooterIcons />
          
          <div className="footer__copiright">
              <p>© 2024 OneMedia</p>
              
          </div>
          <div className="footer__info">
              <a href="">Terms</a><a href="">Privacy</a><a href="">Cookies</a>
          </div>
      
    </footer>
    
  );
};

export default Footer;
