import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-background bg-cover bg-center h-30 p-4 flex flex-col justify-center">
      <h1 className="text-white font-poppins text-4xl text-center m-3"> Hola, soy Jared Ozono</h1>
      <h2 className='text-gray-400 font-poppins text-3xl text-center'>Desarrollador Frontend apasionado por crear <br /> soluciones web innovadoras y eficientes</h2>
    </nav>
  );
}

export default Navbar;