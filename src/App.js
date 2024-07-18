import React, { useEffect, useState } from "react";
import "@fontsource/poppins";
import Home from './components/Home';
import MemeEvolution from './components/MemeEvolution';
import Footer from './components/Footer';
import OurPartners from "./components/OurPartners";
import Expertise from "./components/Expertise";
import OurExprience from "./components/OurExperience";
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const spinner = document.getElementById("spinner");
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 2000);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollValue(Math.round(scrollPercent));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    !loading && (
      <div className="App">
        <Home />
        <MemeEvolution />
        <OurPartners />
        <Expertise />
        <OurExprience />
        <Footer />
        <div id="progress">
          <span id="progress-value">{scrollValue}%</span>
        </div>
      </div>
    )
  );
}

export default App;
