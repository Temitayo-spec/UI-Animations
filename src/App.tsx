import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import SiteRevealAnimation from './pages/SiteRevealAnimation';
import ParallaxSlider from './pages/ParallaxSlider';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/site-reveal-animation' ||
      location.pathname === '/parallax-slider' ? (
        ''
      ) : (
        <Navbar />
      )}
      <AnimatePresence mode="wait" key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/site-reveal-animation"
            element={<SiteRevealAnimation />}
          />
          <Route path="/parallax-slider" element={<ParallaxSlider />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
