import { useState } from 'react';

const diplomasFront = [
  {
    title: 'FrontEnd Developer',
    image: '/certificados/diploma-frontend-developer.jpg',
  },
  {
    title: 'FrontEnd Developer práctico',
    image: '/certificados/diploma-frontend-developer-practico.jpg',
  },
  {
    title: 'Git y GitHub',
    image: '/certificados/diploma-git-github.jpg',
  },
  {
    title: 'Fundamentos de JavaScript',
    image: '/certificados/diploma-javascript.jpg',
  },
  {
    title: 'Asincronismo con JavaScript',
    image: '/certificados/diploma-asincronismo-js.jpg',
  },
  {
    title: 'NPM: Gestión de paquetes y dependencias en JavaScript',
    image: '/certificados/diploma-npm.jpg',
  },
  {
    title: 'React.js',
    image: '/certificados/diploma-react.jpg',
  },
  {
    title: 'React.js con Vite.js y Tailwind.css',
    image: '/certificados/diploma-react-vite-tailwindcss.jpg',
  },
  {
    title: 'React.js: E-Commerce profesional',
    image: '/certificados/diploma-laboratorio-react.jpg', 
  },
  {
    title: 'Curso React.js',
    image: '/certificados/curso-reactjs.png',
  },
];

const diplomasback = [
  {
    title: 'Introducción al desarrollo BackEnd',
    image: '/certificados/introduccion-backend.jpg',
  },
  {
    title: 'Base de datos con SQL',
    image: '/certificados/base-de-datos-sql.jpg',
  },
]

const Certificados = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='bg-slate-50 min-h-screen text-slate-900 flex flex-col items-center'>
      <h1 className='text-slate-900 font-extrabold text-3xl mb-8 mt-6 text-center'>Certificados</h1>
      <div className='flex flex-col items-center'>
      <h2 className='font-poppins text-2xl font-bold text-slate-800 mt-10 mb-8'>FrontEnd Developer</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mx-10 mb-16'>
        {diplomasFront.map((diploma, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 group">
            <img 
              src={diploma.image} 
              alt={diploma.title} 
              className="h-auto object-cover w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.02] shadow-sm mb-4 cursor-pointer" 
              onClick={() => handleImageClick(diploma.image)}
            />
            <h3 className="font-poppins text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mt-2 text-center">{diploma.title}</h3>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative p-6 bg-white rounded-lg shadow-lg md:max-h-xl md:max-w-xl lg:max-h-2xl lg:max-w-2xl xl:max-h-5xl xl:max-w-5xl">
            <button 
              className="absolute top-0 right-0 mt-2 mr-2 text-black text-2xl font-bold" 
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Ampliado" className="w-auto h-auto rounded-lg" />
          </div>
        </div>
      )}
      </div>

      {/*certificados de BackEnd*/}

      <div className='flex flex-col items-center'>
      <h2 className='font-poppins text-3xl mt-10 mb-14'>BackEnd Developer</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mx-10 mb-16'>
        {diplomasback.map((diploma, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 group">
            <img 
              src={diploma.image} 
              alt={diploma.title} 
              className="h-auto object-cover w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.02] shadow-sm mb-4 cursor-pointer" 
              onClick={() => handleImageClick(diploma.image)}
            />
            <h3 className="font-poppins text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mt-2 text-center">{diploma.title}</h3>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative p-6 bg-white rounded-lg shadow-lg md:max-h-xl md:max-w-xl lg:max-h-2xl lg:max-w-2xl xl:max-h-5xl xl:max-w-5xl">
            <button 
              className="absolute top-0 right-0 mt-2 mr-2 text-black text-2xl font-bold" 
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Ampliado" className="w-auto h-auto rounded-lg" />
          </div>
        </div>
      )}
      </div>

    </div>
  );
}

export default Certificados;
