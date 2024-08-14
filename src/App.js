import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import Game from './routes/Game/Game'; 
import Game2 from './routes/Game2/Game2';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ContentSection title="About Us" text="This is where you describe your business." />
              <ContentSection title="Services" text="Describe the services you offer." />
              <ContentSection title="Contact Us" text="Provide contact information." />
            </>
          } />
          <Route path="/game" element={<Game />} /> 
          <Route path="/game2" element={<Game2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;