import React from 'react';
import Navbar from '../Components/navbar';
import Body from '../Components/body'
import Footer from '../Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-pattern">
      <Navbar />
      <div className="flex-grow">
      <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
