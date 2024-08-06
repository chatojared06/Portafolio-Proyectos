import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/navbar';
import Photo from '../Components/photo';
import AboutMy from '../Components/AboutMy';
import Certificados from '../Components/Certificados';
import Body from '../Components/body';
import Footer from '../Components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-custom-pattern">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Photo />
                <AboutMy />
                <Body />
              </>
            } />
            <Route path="/certificados" element={<Certificados />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
