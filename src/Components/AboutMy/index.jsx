import React from 'react';
import { Link } from 'react-router-dom';

const AboutMy = () => {
  return (
    <div className='bg-cover bg-gray-300 h-auto p-4 flex flex-col items-center'>
      <div className='w-full max-w-screen-lg'>
        <h2 className="text-gray font-poppins text-3xl mt-4 mx-6">Sobre Mí:</h2>
        <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          <div className='flex-1'>
            <p className='mt-6 text-lg mx-6'>
              Soy Jared Ozono, un desarrollador Frontend con un profundo interés en aprender más sobre la creación de interfaces de usuario dinámicas y responsivas. Mi objetivo es transformar ideas complejas en aplicaciones web intuitivas y funcionales. Me especializo en tecnologías modernas como React, Vite.js y Tailwind CSS, y estoy comprometido con el aprendizaje continuo y la mejora de mis habilidades.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full max-w-screen-lg sm:mt-6 mt-0 mx-20'>
        <h2 className='text-gray font-poppins text-3xl mt-6 mx-6'>Tecnologías y Habilidades:</h2>
        <h3 className='text-custom-green font-poppins text-2xl mt-6 mx-6'>Tecnologías:</h3>
        <ul className='text-lg mt-4 mx-6 list-disc list-inside'>
          <li><strong>Frontend:</strong> React, Vite.js, HTML, CSS, JavaScript, Tailwind CSS</li>
          <li><strong>Herramientas de Desarrollo:</strong> Git, GitHub, Netlify</li>
          <li><strong>Otros:</strong> API Integration, Local Storage, Responsive Design</li>
        </ul>
        
        <h3 className='text-custom-green font-poppins text-2xl mt-6 mx-6'>Habilidades:</h3>
        <ul className='text-lg mt-4 mb-6 mx-6 list-disc list-inside'>
          <li><strong>Desarrollo de Interfaces de Usuario:</strong> Creación de interfaces atractivas y funcionales</li>
          <li><strong>Optimización de Rendimiento:</strong> Mejora de la eficiencia y velocidad de las aplicaciones web</li>
          <li><strong>Gestión de Estados:</strong> Manejo eficiente de estados en aplicaciones React</li>
          <li><strong>Persistencia de Datos:</strong> Implementación de técnicas para almacenar y recuperar datos</li>
        </ul>
      </div>
      <div className='flex justify-start'>
        <Link 
          to="/certificados"
          className="inline-block bg-cyan-800 text-white px-4 py-2 mb-6 rounded-lg text-lg font-semibold font-poppins mt-4">
          Ver mis certificados
        </Link>
      </div>
    </div>
  );
}

export default AboutMy;
