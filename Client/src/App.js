import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import {Routes, Route } from "react-router-dom";
import './App.css';
import TabFooter from './components/TabFooter/TabFooter';
import SubCar from './components/SubCar/SubCar';
import Cars from './components/Pages/Cars';
import Completed from './components/Pages/Completed';
import Outnr from './components/Pages/Outnr';
import Pulls from './components/Pages/Pulls';
import Request from './components/Pages/Request';
import User from './_user/User';

import Login from "./_user/components/Login";
import Register from "./_user/components/Register";
import Home from "./_user/components/Home";
import Profile from "./_user/components/Profile";
import BoardUser from "./_user/components/BoardUser";
import BoardModerator from "./_user/components/BoardModerator";
import BoardAdmin from "./_user/components/BoardAdmin";
import PrivateRoute from './_user/common/PrivateRoute';
import { upReset } from './_actions/updateForm';
import CarsLength from './components/CarsLength';



function App() {
  const [formT, setFormT] = useState()
  const { user: currentUser } = useSelector((state) => state.auth);
  const auth = currentUser && currentUser.roles 



  return (
    <>
    <User/>
      {auth && (<TabFooter {...{ formT, setFormT}}/>)}
      <Routes>
          <Route path="/1" element={<PrivateRoute><SubCar {...{formT, setFormT}}/></PrivateRoute>}/>
          <Route path="/2" element={<PrivateRoute><Cars/></PrivateRoute>}/>
          <Route path="/3" element={<PrivateRoute><Request/></PrivateRoute>}/>
          <Route path="/4" element={<PrivateRoute><Pulls/></PrivateRoute>}/>
          <Route path="/5" element={<PrivateRoute><Outnr/></PrivateRoute>}/>
          <Route path="/6" element={<PrivateRoute><Completed/></PrivateRoute>}/> 
          <Route path="/" element={<Home />} />
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

