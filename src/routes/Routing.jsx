import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../utils/ScrollToTop';

// Main category pages
import Tractors from '../pages/Tractors/index';
import Tyre from '../pages/Tyres/index';
import Lubrications from '../pages/Lubrications/index';
import Agriculture from '../pages/Agriculture/index';
import Batteries from '../pages/Batteries/index';

// Subpages - Tractors
import OldTractors from '../pages/Tractors/OldTractors';
import TractorsParts from '../pages/Tractors/TractorsParts';

// Subpages - Tyres
import MotorcycleScooters from '../pages/Tyres/MotorcycleAndScooters';
import ThreeWheelerTyres from '../pages/Tyres/ThreeWheelarTyres';
import TractorFarmTyres from '../pages/Tyres/TractorAndFarmTyres';

// Subpages - Lubrications
import EngineOil from '../pages/Lubrications/EngineOil';
import GearOil from '../pages/Lubrications/GearOil';
import Grease from '../pages/Lubrications/Grease';

// Subpages - Agriculture
import AgriculturePipes from '../pages/Agriculture/AgriculturePipes';
import AgriculturePumps from '../pages/Agriculture/AgriculturePumps';

// Subpages - Batteries
import Amaron from '../pages/Batteries/Amaron';
import ProductList from '../components/ProductList';
import ProductSection from '../components/ProductSection';

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* Main Pages */}
        <Route path="/tractor" element={<Tractors />} />
        <Route path="/tyre" element={<Tyre />} />
        <Route path="/lubrications" element={<Lubrications />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/batteries" element={<Batteries />} />

        {/* Tractors Subpages */}
        <Route path="/tractor/old" element={<OldTractors />} />
        <Route path="/tractor/parts" element={<TractorsParts />} />

        {/* Tyres Subpages */}
        <Route path="/tyre/motorcycle-scooters" element={<MotorcycleScooters />} />
        <Route path="/tyre/three-wheeler" element={<ThreeWheelerTyres />} />
        <Route path="/tyre/tractor-farm" element={<TractorFarmTyres />} />

        {/* Lubrications Subpages */}
        <Route path="/lubrications/engine-oil" element={<EngineOil />} />
        <Route path="/lubrications/gear-oil" element={<GearOil />} />
        <Route path="/lubrications/grease" element={<Grease />} />

        {/* Agriculture Subpages */}
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/agriculture/pumps" element={<AgriculturePumps />} />

        {/* Batteries Subpages */}
        <Route path="/batteries/amaron" element={<Amaron />} />
        <Route path="/product-details/:id" element={<ProductSection />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default Routing;
