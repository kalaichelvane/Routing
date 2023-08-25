import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard';
import Bookview from './Bookview';
import Timetable from './Timetable';
import Click from './Click';

function App() {
  
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/bookview' element={<Bookview />} />
          <Route exact path='/timetable' element={<Timetable />} />
          <Route exact path='/click' element={<Click />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
