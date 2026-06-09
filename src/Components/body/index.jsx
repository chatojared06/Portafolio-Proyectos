const projects = [
  {
    title: 'BorderCRM — AI-Powered B2B SaaS',
    description: 'Plataforma SaaS full-stack estructurada en un monorepo para la gestión avanzada de leads B2B. Implementa un pipeline Kanban interactivo con persistencia de estados en tiempo real, protección de rutas mediante autenticación JWT estricta y un agente de IA integrado para automatizar flujos de venta.',
    tecnologiasUtilizadas: [
      'React & Vite.js: Utilizados para construir una UI dinámica, rápida y de alto rendimiento.',
      'Node.js & Express: Para la construcción de la API RESTful del servidor.',
      'PostgreSQL & Prisma ORM: Para la gestión segura de la base de datos relacional en la nube (Neon DB).',
      'Google Gemini API: Integración de inteligencia artificial para asistencia y redacción de correos.',
      'Tailwind CSS: Diseño de interfaces modernas, responsivas y mobile-first.'
    ],
    habilidadesDesarrolladas: [
      'Arquitectura Monorepo: Estructuración profesional de cliente y servidor en un solo repositorio.',
      'Seguridad (Auth): Implementación completa de JSON Web Tokens (JWT) y protección de rutas privadas.',
      'Operaciones CRUD Complejas: Persistencia de datos en tiempo real entre el Frontend y el Backend.',
      'Integración de IA: Conexión con modelos de lenguaje grandes (LLMs) para procesar datos de la aplicación y generar respuestas automatizadas.'
    ],
    image: 'image/Border-crm.png', 
    link: 'https://border-crm.netlify.app/', 
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
];


const Body = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="justify-center mt-6">
        <p className=" text-slate-900 font-extrabold text-3xl mb-4 text-center font-poppins"> Proyectos Destacados </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 py-10">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:max-w-2xl lg:max-w-3xl mx-4">
            <div className="h-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 group">
              <img className=" w-full object-cover h-auto" src={project.image} alt={project.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-poppins text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</div>
                <p className="text-slate-600 leading-relaxed"> {project.description} </p>
                <div className="font-bold text-slate-900 text-sm tracking-wide uppercase mt-3 mb-2 font-poppins">Tecnologías utilizadas</div>
                <ul className='text-sm text-slate-600 space-y-1 mt-4 mx-6 list-disc '>
                  {project.tecnologiasUtilizadas.map((tech, techIndex) => tech && <li key={techIndex}>{tech}</li>)}
                </ul>
                <div className="font-bold text-slate-900 text-sm tracking-wide uppercase mt-3 mb-2 font-poppins">Habilidades desarrolladas</div>
                <ul className='text-sm text-slate-600 space-y-1 mt-4 mx-6 list-disc '>
                  {project.habilidadesDesarrolladas.map((skill, skillIndex) => skill && <li key={skillIndex}>{skill}</li>)}
                </ul>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full px-3 py-2 text-lg font-semibold text-center font-poppins"
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
