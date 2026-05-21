import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../Components/Scroll/SrollToTop';
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
      <ScrollToTop/>
      <div className="bg-slate-50 min-h-screen text-slate-900 flex flex-col">
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
