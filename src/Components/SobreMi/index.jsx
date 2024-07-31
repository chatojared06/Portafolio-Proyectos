import React from 'react';

const SobreMi = () => {
  return (
    <div className='bg-cover bg-gray-300 h-auto p-4 flex flex-col items-center'>
      <div className='w-full max-w-screen-lg'>
        <h2 className="text-gray font-poppins text-3xl mt-4 mx-6 sm:mx-40 ">Sobre Mí:</h2>
        <p className='mt-6 mx-6 sm:mx-40 text-lg '>
          Soy Jared Ozono, un desarrollador Frontend con un profundo interes aprender mas sobre la creación de interfaces de usuario dinámicas y responsivas. Mi objetivo es transformar ideas complejas en aplicaciones web intuitivas y funcionales. Me especializo en tecnologías modernas como React, Vite.js y Tailwind CSS, y estoy comprometido con el aprendizaje continuo y la mejora de mis habilidades.
        </p>
      </div>
      <div className='w-full max-w-screen-lg'>
        <h2 className='text-gray font-poppins text-3xl mt-6 mx-6 sm:mx-40 '>Tecnologías y Habilidades:</h2>
        <h3 className='text-red-800 font-poppins text-2xl mt-6 mx-6 sm:mx-40 '>Tecnologías:</h3>
        <ul className='text-lg mt-4 mx-6 sm:mx-40 list-disc list-inside '>
          <li><strong>Frontend:</strong> React, Vite.js, HTML, CSS, JavaScript, Tailwind CSS</li>
          <li><strong>Herramientas de Desarrollo:</strong> Git, GitHub, Netlify</li>
          <li><strong>Otros:</strong> API Integration, Local Storage, Responsive Design</li>
        </ul>
        
        <h3 className='text-green-800 font-poppins text-2xl mt-6 mx-6 sm:mx-40 '>Habilidades:</h3>
        <ul className='text-lg mt-4 mb-6 mx-6 sm:mx-40 list-disc list-inside '>
          <li><strong>Desarrollo de Interfaces de Usuario:</strong> Creación de interfaces atractivas y funcionales</li>
          <li><strong>Optimización de Rendimiento:</strong> Mejora de la eficiencia y velocidad de las aplicaciones web</li>
          <li><strong>Gestión de Estados:</strong> Manejo eficiente de estados en aplicaciones React</li>
          <li><strong>Persistencia de Datos:</strong> Implementación de técnicas para almacenar y recuperar datos</li>
        </ul>
      </div>
    </div>
  );
}

export default SobreMi;
