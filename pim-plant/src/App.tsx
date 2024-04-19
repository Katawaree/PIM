import React from 'react';
import Camera from './components/camera';
import DailyStreak from './components/dailystreak';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="DailyStreak">
      </div>
      <DailyStreak />
      <Camera />
    </div>
  );
}

export default App;
