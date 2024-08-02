import React from 'react';
import Navbar from '../Components/navbar';
import Photo from '../Components/photo';
import Body from '../Components/body'
import Footer from '../Components/Footer';
import './App.css';
import AboutMy from '../Components/AboutMy';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-pattern">
      <Navbar />
      <div className="flex-grow">
      <Photo/>
      <AboutMy/>
      <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
