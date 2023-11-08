import React from 'react';
import './App.css';
import Header from './components/header';
import Marquee from './components/marquee';
import CardGrid from './components/cardGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <Marquee />
      <CardGrid />
    </div>
  );
}

export default App;
