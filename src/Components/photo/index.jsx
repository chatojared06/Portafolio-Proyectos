import React from 'react';
import './photo.css'

const Photo = () => {
  return (
    <div className="Photo-background p-4 md:flex-row flex flex-col items-center justify-center">
      <div className='ml-6'>
        <h2 className='text-black md:text-start text-center font-poppins text-3xl mb-8 mt-4 leading-tight'>
          <strong className='text-custom-green'>Desarrollador Frontend</strong> <br/> apasionado por crear
          <br/> soluciones web <br/>innovadoras y eficientes
        </h2>
      </div>
      <div className='flex flex-col items-center sm:mt-6 mt-0 mx-20'>
        <img 
          src="/image/yo.jpg" 
          alt="Jared Ozono" 
          className='w-64 h-64 max-w-full max-h-full rounded-full border-2 border-green-900 shadow-lg object-cover'
          />

        <a 
          href="/Curriculum.pdf" 
          download 
          className="inline-block bg-cyan-800 text-white px-4 py-2 mb-6 rounded-lg text-lg font-semibold font-poppins mt-4 text-center">
          Descargar mi Currículum Vitae
        </a>
      </div>
    </div>
  );
}

export default Photo;

