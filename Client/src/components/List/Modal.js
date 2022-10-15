import React from "react"
import { Route, Routes } from "react-router-dom";


const Modal = ({setPullId, pullId, setModal, tableData, y}) => {
   
   return(  
   
         <y setPullId={setPullId} {...{pullId, setModal, tableData}}/>
     
   )
}

export default Modal;
