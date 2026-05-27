import { Link } from 'react-router-dom';

const AboutMy = () => {
  return (
    <div className=' h-auto p-4 flex flex-col items-center'>
      <div className='w-full max-w-screen-lg'>
        <h2 className="text-slate-900 font-extrabold text-3xl mt-4 mx-6">Sobre Mí:</h2>
        <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          <div className='flex-1'>
            <p className='text-slate-600 leading-relaxed mt-6 text-lg mx-6'>
              Desarrollador Frontend Junior enfocado en React.js, Vite y Tailwind. Creo proyectos web prácticos para aplicar mis bases teóricas a la realidad. Actualmente estudio Node.js y PostgreSQL. Busco mi primera experiencia profesional para colaborar en equipo, aportar iniciativa y seguir aprendiendo
            </p>
          </div>
        </div>
      </div>
      <div className='w-full max-w-screen-lg sm:mt-6 mt-0 mx-20'>
        <h2 className='text-slate-900 font-extrabold text-3xl mt-6 mx-6'>Tecnologías y Habilidades:</h2>
        <h3 className='text-slate-800 font-bold text-2xl mt-6 mx-6'>Tecnologías:</h3>
        <ul className='text-lg text-slate-600 space-y-2 mt-4 mx-6 list-disc list-inside'>
          <li><strong>Frontend:</strong> React.js, Vite, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3.</li>
          <li><strong>Backend & Datos:</strong> PostgreSQL (Neon DB), Node.js (Básico).</li>
          <li><strong>APIs e IA:</strong> Integración de Google AI (Chatbots), Consumo de APIs RESTful.</li>
          <li><strong>Herramientas de Desarrollo:</strong> Git, GitHub, Netlify</li>
        </ul>
        
        <h3 className='text-slate-800 font-bold text-2xl mt-6 mx-6'>Habilidades:</h3>
        <ul className='text-lg mt-4 mb-6 mx-6 list-disc list-inside'>
          <li><strong>Desarrollo de SPA</strong> Construcción de aplicaciones web interactivas (Single Page Applications) escalables y con alto rendimiento.</li>
          <li><strong>Gestión de Estado Dinámico:</strong> Manejo eficiente de flujos de datos complejos en el cliente para asegurar una UX fluida.</li>
          <li><strong>Persistencia y Bases de Datos:</strong> Integración de almacenamiento local y conexiones a bases de datos relacionales para manejo de información real.</li>
          <li><strong>Integración de Servicios B2B:</strong> Conexión de herramientas externas e Inteligencia Artificial para resolver necesidades de negocio (ej. asistentes virtuales).</li>
        </ul>
      </div>
      <div className='flex justify-start'>
        <Link 
          to="/certificados"
          className="inline-block bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 px-4 py-2 mb-6 text-lg font-semibold font-poppins mt-4">
          Ver mis certificados
        </Link>
      </div>
    </div>
  );
}

export default AboutMy;
