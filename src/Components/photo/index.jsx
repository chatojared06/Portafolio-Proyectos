import './photo.css'

const Photo = () => {
  return (
   
    <div className="p-4 md:flex-row md:gap-x-12 flex flex-col items-center justify-center">
      
    
      <div className='ml-6'>
        <h2 className='text-slate-900 md:text-start text-center font-poppins text-3xl mb-8 mt-4 leading-tight'>
          <strong className='text-blue-600'>Desarrollador Frontend</strong> <br/> apasionado por crear
          <br/> soluciones web <br/>innovadoras y eficientes
        </h2>
      </div>

     
      <div className='flex flex-col items-center sm:mt-6 mt-0'>
        <img 
          src="/image/yo.jpg" 
          alt="Jared Ozono" 
          
          className='w-64 h-64 rounded-full border-4 border-white shadow-2xl object-cover object-top'
          />

        <a 
          href="/Curriculum.pdf" 
          download 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 px-4 py-2 mb-6 text-lg font-semibold font-poppins mt-4 text-center">
          Descargar mi Currículum Vitae
        </a>
      </div>
    </div>
  );
}

export default Photo;