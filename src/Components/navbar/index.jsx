import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 bg-cover bg-center h-30 p-4 flex items-center justify-center">
      <div className='flex flex-row items-center '>
      <Link
      to="/"
      >
        <img src="/Logopng.png" alt="logo" className="w-20 h-20 mb-3" />
      </Link>
      <h1 className="text-slate-900 font-extrabold text-4xl text-center m-3">Jared Ozono</h1>
      </div>
    </nav>
  );
}

export default Navbar;
