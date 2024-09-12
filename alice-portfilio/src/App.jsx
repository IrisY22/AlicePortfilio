import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import About from "./components/about_page/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;