import React from 'react';
import Navbar from '../Components/navbar';
import Body from '../Components/body'
import Footer from '../Components/Footer';
import './App.css';
import SobreMi from '../Components/SobreMi';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-pattern">
      <Navbar />
      <div className="flex-grow">
      <SobreMi/>
      <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
