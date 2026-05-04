import React from 'react';
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Certification from './components/Certification/Certification';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Project />
      <Skills />
      <Education />
      <Experience />
      <Certification />
      <Contact />
    </>
  );
}

export default App;