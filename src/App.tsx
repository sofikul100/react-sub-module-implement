import { BrowserRouter as Router, Routes, Route, useLocation,Link } from "react-router-dom";
import { AnimatePresence, } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Text from "./Pages/Text";
import Rest from "./Pages/Rest";
import Pdf from "./Pages/Pdf";
import EmployeePdfGenerator from "./Pages/Epreport";
import EmployeeExcelGenerator from "./Pages/Epreport";
import ImageGallery from "./Pages/ImagePhoto";
import ProductList from "./Pages/LoadMore";
import GeneratePdf from "./Pages/GeneratePdf";
import GsapAnimation from "./Pages/GsapAnimation";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/text" element={<Text />} />
        <Route path="/rest" element={<Rest />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/excel" element={< EmployeeExcelGenerator />} />
        <Route path="/image" element={< ImageGallery />} />
        <Route path="/productList" element={< ProductList />} />
        <Route path="/generatepdf" element={< GeneratePdf />} />
        <Route path="/gsap" element={< GsapAnimation />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      {/* <nav className="flex space-x-4 mx-4">
        <Link className="bg-rose-600 mt-2 px-2 py-1 rounded-sm text-white" to="/">Home</Link>
        <Link className="bg-sky-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/about">About</Link>
        <Link className="bg-gray-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/text">Text</Link>
        <Link className="bg-green-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/rest">Rest</Link>
        <Link className="bg-orange-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/pdf">Pdf Format</Link>
        <Link className="bg-indigo-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/excel">Excel Format</Link>
        <Link className="bg-pink-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/image">Image Multiple</Link>
        <Link className="bg-sky-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/productList">Product Load</Link>
        <Link className="bg-rose-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/generatepdf">Generate Pdf</Link>
        <Link className="bg-orange-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/gsap">Gsap Animation</Link>
      </nav> */}
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
