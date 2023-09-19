import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a href="#" className="social-link">
          <FontAwesomeIcon icon={faFacebook} size="4x" style={{ color: 'white' }} />
        </a>
        <a href="#" className="social-link">
          <FontAwesomeIcon icon={faTwitter} size="4x" style={{ color: 'white' }} />
        </a>
        <a href="#" className="social-link">
          <FontAwesomeIcon icon={faInstagram} size="4x" style={{ color: 'white' }} />
        </a>
      </div>
      <p>MAQ &copy; 2023, All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
