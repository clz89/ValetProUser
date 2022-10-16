import React from "react"
import { Route, Routes } from "react-router-dom";


const Modal = ({setPullId, pullId, setModal, tableData, CarsM, PullsM}) => {
   if(CarsM)
   return(  
         < CarsM {...{setPullId, pullId, setModal, tableData}}/>
     )
     else if(PullsM) 
     return (
      < PullsM {...{setPullId, pullId, setModal, tableData}}/>

     )
}

export default Modal;
