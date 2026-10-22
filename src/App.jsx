import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';

function App({ input }) {
  return (
    <div className="calculator">
      <Display value={input} />
      <Buttons />
    </div>
  );
}

export default App;