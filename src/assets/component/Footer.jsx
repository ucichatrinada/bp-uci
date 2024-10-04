import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Beauty Preneur. All rights reserved.</p>
      <div className="socmed__icon">
        <img src="/assets-img/facebook-light.png" alt="Facebook" />
        <img src="/assets-img/github-light.png" alt="GitHub" />
        <img src="/assets-img/instagram-light.png" alt="Instagram" />
      </div>
    </footer>
  );
}

export default Footer;
