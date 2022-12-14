import './App.css';
import Home from './component/pages/Home';
import Portfolio from './component/pages/portfolio';
import Contact from './component/pages/contact';
import AboutMe from './component/pages/About';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/HeaderSec/Header';
import Footer from './component/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>

        <Footer />
      </Router>

    </>
  );
}

export default App;
