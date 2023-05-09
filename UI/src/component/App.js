import '../App.css';
import MainMenu from './MainMenu'
import { useState, useEffect} from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Appointments from "./Appointments";
import Recording from "./Recording";
import Exercise from './Exercise';
import Food from './Food';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';
import React from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  useEffect(() => {
    fetch(' http://127.0.0.1:8000/').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
        setCurrentDate(data.date)
      });
    }, []);
  return (
    <div className= "App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PrivateRoute><MainMenu /></PrivateRoute>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Appointments" element={<PrivateRoute><Appointments /></PrivateRoute>} />
            <Route path="/Recording" element={<PrivateRoute><Recording /></PrivateRoute>} />
            <Route path="/Exercise" element={<PrivateRoute><Exercise /></PrivateRoute>} />
            <Route path="/Food" element={<PrivateRoute><Food /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
