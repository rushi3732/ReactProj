
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import React from 'react';
import About from './components/About';
import Logout from './components/Logout';
import NewTest from './components/NewTest';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

        {/* <Header /> */}
        <Routes>
          <Route path="/header" element={<Home />} />
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/test" element={<NewTest />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
