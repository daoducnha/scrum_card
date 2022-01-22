import React from 'react';

import './App.css';
import Room from './components/Room';
import Home from './components/Home';
import {
  Routes,
  Route,
} from 'react-router-dom';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:roomId' element={<Room/>} />
      </Routes>
    </div>
  );
}

export default App;
