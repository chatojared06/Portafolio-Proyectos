import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className='flex flex-col items-center'>
        <h1 className='text-gray font-poppins text-3xl mb-4 mx-6 sm:mx-40'>Contacto:</h1>
      </div>
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="https://github.com/chatojared06" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:jaredozono@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://wa.me/6641334875?text=Hola,%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
