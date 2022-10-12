import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import TabFooter from './components/TabFooter/TabFooter';
import SubCar from './components/SubCar/SubCar';
import Cars from './components/Pages/Cars';
import Completed from './components/Pages/Completed';
import Outnr from './components/Pages/Outnr';
import Pulls from './components/Pages/Pulls';
import Request from './components/Pages/Request';

function App() {
  const [list, setList]=useState();
  return (
    <>
    <Router>
    <TabFooter/>
      <Routes>
         <Route path='/' element={<SubCar />}/>
         <Route path='/2' element={<Cars {...{list,setList}} />}/>
         <Route path='/3' element={<Request/>}/>     
         <Route path='/4' element={<Pulls {...{list,setList}} />}/>     
         <Route path='/5' element={<Outnr/>}/>    
         <Route path='/6' element={<Completed/>}/> 
                        
      </Routes>
    </Router>        
    </>
  );
}
export default App;

