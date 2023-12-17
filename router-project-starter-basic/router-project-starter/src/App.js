import React from "react";
import "./App.css"; 
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return(
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>  
    </div>
  )
}

export default App;
