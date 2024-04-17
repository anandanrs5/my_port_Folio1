
import React from 'react';
import Header from './component/Header';
import Profile from './component/Profile';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Resume from './component/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

