import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="mailto:jaredozono@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/chatojared06" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100082819054640" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/ozono_jared/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
