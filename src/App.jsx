import { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import ContactMe from "./components/pages/ContactMe";
import Resume from './components/pages/Resume';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
