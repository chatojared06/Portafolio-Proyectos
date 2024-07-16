import React from 'react';

const SobreMi = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center my-12 space-y-8 md:space-y-0 md:space-x-8 px-4">
      <div className="bg-gray-300 rounded-lg shadow-lg p-5 max-w-xl w-full">
        <h2 className="text-4xl font-bold mb-6 text-center">Sobre Mí:</h2>
        <p className="text-lg leading-relaxed">
          Soy Jared Ozono, un desarrollador Frontend con una sólida experiencia en la creación de interfaces de usuario dinámicas y responsivas. Mi objetivo es transformar ideas complejas en aplicaciones web intuitivas y funcionales. Me especializo en tecnologías modernas como React, Vite.js y Tailwind CSS, y estoy comprometido con el aprendizaje continuo y la mejora de mis habilidades.
        </p>
      </div>
      <div className="bg-gray-300 rounded-lg shadow-lg p-5 max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Tecnologías y Habilidades</h2>
        <p className="text-lg leading-relaxed">
          <strong>Tecnologías:</strong>
          <ul className="list-disc list-inside">
            <li>Frontend: React, Vite.js, HTML, CSS, JavaScript, Tailwind CSS</li>
            <li>Herramientas de Desarrollo: Git, GitHub, Netlify</li>
            <li>Otros: API Integration, Local Storage, Responsive Design</li>
          </ul>
          <strong>Habilidades:</strong>
          <ul className="list-disc list-inside">
            <li>Desarrollo de Interfaces de Usuario: Creación de interfaces atractivas y funcionales.</li>
            <li>Optimización de Rendimiento: Mejora de la eficiencia y velocidad de las aplicaciones web.</li>
            <li>Persistencia de Datos: Implementación de técnicas para almacenar y recuperar datos.</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default SobreMi;
