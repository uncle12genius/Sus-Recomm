import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Values from './pages/Values';
import OurTeam from './pages/OurTeam';
import Story from './pages/Story';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="story">
        <Story />
      </div>
      <div id="values">
        <Values />
      </div>
      <div id="ourteam">
        <OurTeam />
      </div>
       <Footer />
    </div>
  );
};

export default App;