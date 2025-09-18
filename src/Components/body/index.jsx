import React from 'react';
import './index.css'

const projects = [
  {
    title: 'E-commerce con API Fake Platzi',
    description: 'Desarrollé una tienda en línea utilizando React, Vite.js y Tailwind CSS. Este proyecto me permitió aprender a manipular una API, gestionar datos de manera eficiente y redirigir a los usuarios según sus interacciones. La tienda simula un entorno de comercio electrónico con funcionalidades completas, proporcionando una experiencia de usuario fluida y responsiva.',
    tecnologiasUtilizadas: [
      'React: Utilizado para construir una interfaz de usuario dinámica y reactiva.',
      'Vite.js: Implementado como el bundler para mejorar la velocidad de desarrollo y la eficiencia.',
      'Tailwind CSS: Usado para diseñar una interfaz moderna y estilizada de manera rápida y eficiente.',
      'API Fake de Platzi: Implementada para simular datos reales de productos y usuarios, permitiendo pruebas y desarrollos más realistas.',
    ],
    habilidadesDesarrolladas: [
      'Manipulación de API: Aprendí a interactuar con una API, gestionar solicitudes y respuestas, y utilizar los datos obtenidos en la aplicación.',
      'Gestión de Datos: Implementé técnicas para manejar y presentar datos de manera eficiente en la interfaz de usuario.',
      'Redirección de Usuarios: Desarrollé funcionalidades para redirigir a los usuarios según sus acciones dentro de la aplicación, mejorando la navegación y experiencia del usuario.',
    ],
    image: '/image/E-commerce.png',
    link: 'https://adorable-vacherin-8c1dae.netlify.app/',
  },
  {
    title: 'To do list',
    description: 'Desarrollé una aplicación de lista de tareas utilizando React.js. Este proyecto me permitió aprender a implementar la persistencia de datos usando el almacenamiento local (local storage), asegurando que las tareas del usuario se mantengan guardadas incluso después de cerrar la aplicación. La interfaz es intuitiva y fácil de usar, permitiendo a los usuarios agregar, editar y eliminar tareas de manera eficiente.',
    tecnologiasUtilizadas: [
      'React: Utilizado para crear una interfaz de usuario dinámica y reactiva.',
      'CSS: Usado para diseñar una interfaz limpia y moderna, asegurando una buena experiencia de usuario.',
      'Local Storage: Implementado para mantener la persistencia de datos, guardando las tareas del usuario en el navegador.',
    ],
    habilidadesDesarrolladas: [
      'Gestión de Estados en React: Aprendí a manejar estados en React para actualizar y renderizar la lista de tareas en tiempo real.',
      'Persistencia de Datos: Implementé técnicas para almacenar y recuperar datos del local storage, asegurando que las tareas del usuario se guarden y se recuperen correctamente.',
      'Optimización de Rendimiento: Mejoré la eficiencia de la aplicación, asegurando una carga rápida y una experiencia de usuario fluida.',
    ],
    image: '/image/To-do-list.png',
    link: ' https://chatojared06.github.io/Todo-Machine/',
  },
  {
    title: 'MovieApp con la API de TMDB',
    description: 'Aplicación web interactiva para explorar películas, desarrollada utilizando la API de The Movie Database (TMDB). El proyecto permite a los usuarios descubrir películas populares, filtrar por género, buscar títulos específicos y ver páginas de detalles4.',
    tecnologiasUtilizadas: [
      'React: Utilizado para construir una interfaz de usuario dinámica y reactiva.',
      'Vite.js: Implementado como la herramienta de construcción para un desarrollo y recarga ultra rápidos.',
      'Tailwind CSS: Usado para diseñar y estilizar toda la aplicación, logrando un diseño moderno y responsivo.',
      'React Router Dom: Para manejar la navegación del lado del cliente, creando una experiencia de aplicación de una sola página con múltiples vistas y rutas dinámicas.',
      'Axios: Implementado para gestionar las llamadas a la API de TMDB de forma asíncrona.',
    ],
    habilidadesDesarrolladas: [
      'Integración de APIs con Axios: Consumo de datos de una API RESTful (TMDB), realizando peticiones asíncronas para obtener, buscar y filtrar información, incluyendo la gestión segura de claves de API.',
      'Desarrollo de UI Interactiva y Animaciones: Creación de componentes con micro-interacciones y efectos visuales usando únicamente utilidades de Tailwind CSS, como animaciones en hover y transiciones condicionales.',
    ],
    image: '/image/MovieApp.png', 
    link: 'https://jsxmovieapp.netlify.app/',
  },
];

const projects2 = [
  {
    title: 'Pagina de Error 404',
    description: 'Página personalizada de error 404 inspirada en Star Wars. Incluye un diseño galáctico con una animación en el botón de regreso icónica de la saga, asegurando una experiencia visual atractiva para los usuarios cuando se encuentran con una página no encontrada.',
    tecnologiasUtilizadas: [
      'HTML: Utilizado para crear la estructura del sitio web.',
      'CSS: Usado para diseñar y estilizar la interfaz, asegurando un diseño atractivo y responsivo, y para agregarle una animación al botón.'
    ],
    habilidadesDesarrolladas: [
      'HTML: Organización del contenido con etiquetas básicas.',
      'Estilización con CSS: Uso avanzado de selectores y propiedades CSS para personalizar el estilo y diseño visual.',
      'Diseño Responsivo: Aplicación de técnicas para que la página se vea bien en diferentes dispositivos.'
    ],
    image: '/image/error-star-wars.png',
    link: 'https://chatojared06.github.io/Error-404-star-wars/'
  },   
  {
    title: 'Concepto básico de un E-commerce sin lógica',
    description: 'Desarrollé un sitio web de comercio electrónico básico para aprender y practicar los conceptos fundamentales de HTML y CSS. Este proyecto me permitió comprender la estructura básica de un sitio web y cómo estilizarlo utilizando CSS. Aunque no incluye lógica de backend ni interacciones avanzadas, el diseño es responsivo y ofrece una buena base para proyectos más complejos en el futuro.',
    tecnologiasUtilizadas: [
      'HTML: Utilizado para crear la estructura del sitio web.',
      'CSS: Usado para diseñar y estilizar la interfaz, asegurando un diseño atractivo y responsivo.',
    ],
    habilidadesDesarrolladas: [
      'Maquetación con HTML: Aprendí a estructurar correctamente un sitio web utilizando etiquetas semánticas de HTML.',
      'Estilización con CSS: Implementé estilos para mejorar la apariencia del sitio, incluyendo el uso de flexbox y grid para crear un diseño responsivo.',
      'Diseño Responsivo: Aseguré que el sitio web se vea bien en diferentes dispositivos y tamaños de pantalla.',
    ],
    image: '/image/ecommerce-boseto.png',
    link: 'https://chatojared06.github.io/curso-frontend-developer-JavaScript-practico/',
  },
];

const Body = () => {
  return (
    <div className="body flex flex-col items-center ">
      <div className="justify-center mt-6">
        <p className="text-white text-center text-2xl font-poppins"> Proyectos con lógica </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 py-10">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:max-w-2xl lg:max-w-3xl mx-4">
            <div className="h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img className=" https://chatojared06.github.io/Todo-Machine/" src={project.image} alt={project.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-poppins">{project.title}</div>
                <p className="text-gray-700 text-base"> {project.description} </p>
                <div className="font-bold text-xl mt-3 mb-2 font-poppins">Tecnologías utilizadas</div>
                <ul className='text-lg mt-4 mx-6 list-disc '>
                  {project.tecnologiasUtilizadas.map((tech, techIndex) => tech && <li key={techIndex}>{tech}</li>)}
                </ul>
                <div className="font-bold text-xl mt-3 mb-2 font-poppins">Habilidades desarrolladas</div>
                <ul className='text-lg mt-4 mx-6 list-disc '>
                  {project.habilidadesDesarrolladas.map((skill, skillIndex) => skill && <li key={skillIndex}>{skill}</li>)}
                </ul>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-800 text-white w-full px-3 py-2 rounded-lg text-lg font-semibold text-center font-poppins"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="justify-center mt-6">
        <p className="text-white text-center text-3xl font-poppins"> Proyectos con HTML, CSS y JavaScript básicos </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 py-10">
        {projects2.map((project, index) => (
          <div key={index} className="w-full sm:max-w-2xl lg:max-w-3xl mx-4">
            <div className="h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img className="w-full object-cover h-auto" src={project.image} alt={project.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-poppins">{project.title}</div>
                <p className="text-gray-700 text-base"> {project.description} </p>
                <div className="font-bold text-xl mt-3 mb-2 font-poppins">Tecnologías utilizadas</div>
                <ul className='text-lg mt-4 mx-6 list-disc '>
                  {project.tecnologiasUtilizadas.map((tech, techIndex) => tech && <li key={techIndex}>{tech}</li>)}
                </ul>
                <div className="font-bold text-xl mt-3 mb-2 font-poppins">Habilidades desarrolladas</div>
                <ul className='text-lg mt-4 mx-6 list-disc '>
                  {project.habilidadesDesarrolladas.map((skill, skillIndex) => skill && <li key={skillIndex}>{skill}</li>)}
                </ul>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-800 text-white w-full px-3 py-2 rounded-lg text-lg font-semibold text-center font-poppins"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
