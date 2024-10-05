import { BrowserRouter as Router, Routes, Route, useLocation,Link } from "react-router-dom";
import { AnimatePresence, } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Text from "./Pages/Text";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <nav className="flex space-x-4 mx-4">
        <Link className="bg-rose-600 mt-2 px-2 py-1 rounded-sm text-white" to="/">Home</Link>
        <Link className="bg-sky-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/about">About</Link>
        <Link className="bg-sky-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/text">Text</Link>
        <Link className="bg-sky-600 mt-2 px-2 py-1 rounded-sm text-white"  to="/text">Rest</Link>
      </nav>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
