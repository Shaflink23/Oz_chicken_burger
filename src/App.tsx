import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageBanner from './components/ImageBanner';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OzMenu from './pages/OzMenu';
import Foundation from './pages/Foundation';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <Navbar />
        <main className="pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<OzMenu />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <ImageBanner />
        <Footer />
      </div>
    </Router>
  );
}
