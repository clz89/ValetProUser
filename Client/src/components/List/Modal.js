import React, {useEffect} from "react"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HotM from "./HotM";




const Modal = ({ carlength, setPullId, pullId, setModal, tableData, CarsM, PullsM}) => {
    const [pulldata, setPulldata] = useState("")

    useEffect(()=>{
        tableData.filter((data)=>{
            if(pullId===data._id){
             setPulldata(data)
            }
        })
    })
    

   if(CarsM){
    
   return( 
    < CarsM {...{pulldata, carlength, setPullId, pullId, setModal, tableData}}/>
     )}
     else if(PullsM) {
     if(pulldata.hot ){
        return (< HotM {...{ pulldata, setPullId, pullId, setModal, tableData}}/>)}
      else{
       return ( < PullsM  {...{ pulldata, setPullId, pullId, setModal, tableData}}/>)}
      }
}

export default Modal;
