import React, {useState} from 'react'
import {Routes, Route } from "react-router-dom";
import './App.css';
import TabFooter from './components/TabFooter/TabFooter';
import SubCar from './components/SubCar/SubCar';
import Cars from './components/Pages/Cars';
import Completed from './components/Pages/Completed';
import Outnr from './components/Pages/Outnr';
import Pulls from './components/Pages/Pulls';
import Request from './components/Pages/Request';
import User from './components/User/User';

import Login from "./components/User/components/Login";
import Register from "./components/User/components/Register";
import Home from "./components/User/components/Home";
import Profile from "./components/User/components/Profile";
import BoardUser from "./components/User/components/BoardUser";
import BoardModerator from "./components/User/components/BoardModerator";
import BoardAdmin from "./components/User/components/BoardAdmin";

function App() {
  
  return (
    <>
    <User/>
    <TabFooter/>
      <Routes>
      
         <Route path='/1' element={<SubCar />}/>
         <Route path='/2' element={<Cars />}/>
         <Route path='/3' element={<Request/>}/>     
         <Route path='/4' element={<Pulls />}/>     
         <Route path='/5' element={<Outnr/>}/>    
         <Route path='/6' element={<Completed/>}/> 
         <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
                        
      </Routes>        
    </>
  );
}
export default App;

