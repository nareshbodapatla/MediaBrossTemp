import React, { useState } from "react";
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
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <div className="App">
        <Home />
        <MemeEvolution />
        <OurPartners />
        <Expertise />
        <OurExprience />
        <Footer />
      </div>
    )
  );
}

export default App;
