import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-background bg-cover bg-center h-30 p-4 flex items-center justify-center">
      <div className='flex flex-row items-center '>
      <img src="/Logopng.png" alt="logo" className="w-20 h-20 mb-3" />
      <h1 className="text-white font-poppins text-4xl text-center m-3">Jared Ozono</h1>
      </div>
    </nav>
  );
}

export default Navbar;
