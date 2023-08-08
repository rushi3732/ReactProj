

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';

import Logout from './components/Logout';
import AddEnquiry from './components/AddEnquiry';
import Enquiries from './components/Enquiries';
import Dashboard from './Dashboard';
import Category from './components/Category';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

        {/* <Header /> */}
        <Routes>
    
          <Route path="/logout" element={<Logout />} />
        
        
          <Route path="/signup" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
         
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/category' element={<Category/>}/>
          {/* <Route path='/' element={<Dashboard/>}/>
          <Route path='/' element={<Dashboard/>}/> */}
          
    <Route    path='/addEnquiry' element={<AddEnquiry/>}/>
    <Route    path='/enquiries' element={<Enquiries/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;



//db.student.find({$and:[{"email":""},{"password":""}]})