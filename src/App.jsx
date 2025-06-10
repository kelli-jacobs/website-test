import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import Contact from './Contact.jsx';
import PhotoGallery from "./components/PhotoGallery";
import BioLinks from './BioLinks.jsx';

import './app.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/components/photogallery" element={<PhotoGallery />} />
        <Route path="/biolinks" element={<BioLinks />} />
      </Routes>
      

      <Footer/>
    </>
  );
}

export default App;
