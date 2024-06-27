import React from "react"

const projects = [ 
    {
        title: 'E-commerce fake API Platzi',
        description: 'Tienda en línea con React, Vite.js y Tailwind CSS. Con esta aplicación aprendí a manipular una API y utilizar sus datos y redirigir al usuario según donde están haciendo click',
        image: '/public/image/E-commerce.png',
        link: 'https://adorable-vacherin-8c1dae.netlify.app/',
    },
    {
        title: 'To do list',
        description: 'Una aplicación para anotar las cosas por hacer en el día usando React.js. Con el desarrollo de esta página aprendí a hacer persistencia de datos usando el local storage',
        image: '/public/image/To-do-list.png',
        link: 'https://chatojared06.github.io/TodoMachine/',
    },
]

const projects2 = [ 
    {
        title: 'Concepto basico de un E-commerce sin logica ',
        description: 'En este proyecto aprendi conceptos bacicos de HTML y CSS.',
        image: '/public/image/ecommerce-boseto.png',
        link: 'https://chatojared06.github.io/curso-frontend-developer-JavaScript-practico/',
    },
    {
        title: 'To do list',
        description: 'En este pryecto basico aprendi a llamar los ultimos videos de un canal de youtube y precentarlos en la aplicacion. ',
        image: '/public/image/jedi.png',
        link: 'https://chatojared06.github.io/async-landing/',
    },
]

const Body = () => {
return(
    <div className="flex flex-col">
        <div className="justify-center mt-6"> 
        <p className="text-white text-center text-2xl font-poppins"> Proyectos con Lógica </p>
        </div>
        
            <div className="flex flex-wrap justify-center sm:grid-cols-2 md:grid-cols-3 gap-24 px-4 py-10">
            {projects.map((project, index) => (
                <div key={index} className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-gray-100" >
                <img className="w-full" src={project.image} alt={project.title} />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-poppins">{project.title}</div>
                <p className="text-gray-700 text-base"> {project.description} </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-800 text-white w-full px-3 py-2 rounded-lg text-lg font-semibold text-center font-poppins"
                >
                Ver Proyecto
                </a>
                </div>
                </div>
            ))}
        </div>

        <div className="justify-center mt-6 "> 
        <p className="text-white text-center text-2xl font-poppins"> Proyectos con Html, CSS y js basicos </p>
        </div>
        
            <div className="flex flex-wrap justify-center sm:grid-cols-2 md:grid-cols-3 gap-24 px-4 py-10">
            {projects2.map((project, index) => (
                <div key={index} className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-gray-100" >
                <img className="w-full" src={project.image} alt={project.title} />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base"> {project.description} </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-800 text-white w-full px-3 py-2 rounded-lg text-lg font-semibold text-center font-poppins"
                >
                Ver Proyecto
                </a>
                </div>
                </div>
            ))}
        </div>
    </div>
)
}

export default Body