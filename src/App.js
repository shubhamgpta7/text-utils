
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import React, { useState } from 'react'



function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#212529';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = '#f8f9fa';
    }
  }

  return (
    <>
    <Navbar title="My Title" about="About Me" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} />
    </div>
    </>
    
  );
}

export default App;
