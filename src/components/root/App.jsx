import React from 'react';
import './App.css';

import Navigation from '../navigation/Navigation'
import Hero from '../hero/Hero'
import About from '../about/About'
import Skills from '../skills/Skills'
import Work from '../work/Work'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
