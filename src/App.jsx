import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ResponsiveNavbar from './components/Navbar/Navbar'; // Adjust path as needed
import Home from './Components/Home/Home'; // Your Home component
import About from './Components/About/About'; 
import Footer from './Components/Footer/Footer'
import Contact from "./Components/Contact/Contact";
import Whatsapp from './assets/Whatsapp.png'
import Ply from './Products/Ply/Ply'
import ThreePly from "./Products/Ply/3Ply/ThreePly";
import FourPly from "./Products/Ply/4Ply/FourPly";
import Multiply from "./Products/Ply/MultiPly/Multiply";
import PInsulation from "./Products/PInsulation/PInsulation";
import Insulation1 from "./Products/PInsulation/Insulation1/Insulation1";
import Insulation2 from "./Products/PInsulation/Insulation2/Insulation2";
import Insulation3 from "./Products/PInsulation/Insulation3/Insulation3";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveNavbar />
      <Routes>
        <Route path="*" exact element= <Home/> />
        <Route path="/about" element=<About/> />
        <Route path="/contact" element=<Contact/> />
        <Route path="/products/Ply" element={<Ply />} />
        <Route path="/ThreePly" element={<ThreePly />} />
        <Route path="/FourPly" element={<FourPly />} />
        <Route path="/MultiPly" element={<Multiply />} />

        <Route path="/products/Insulation" element={<PInsulation />} />
        <Route path="Insulation1" element={<Insulation1 />} />
        <Route path="Insulation2" element={<Insulation2 />} />
        <Route path="Insulation3" element={<Insulation3 />} />
      </Routes>
      <Footer/>
      <div className="Whatsapp">
        <div className="whts-img">
        <a 
        href="https://wa.me/9023407993"  
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
          <img src={Whatsapp} className="img-fluid" />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
