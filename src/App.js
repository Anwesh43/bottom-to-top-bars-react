import React from 'react';
import logo from './logo.svg';
import './App.css';
import BottomToTopBarContainer from './BottomToTopBarContainer'
function App() {
  return (
    <div className="App">
      <BottomToTopBarContainer n = {6}/>
    </div>
  );
}

export default App;
