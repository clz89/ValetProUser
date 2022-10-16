import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CarsLength = () => {
const posts = useSelector( state => state.subCars )
    
    const carlength = posts.length

    useEffect(()=> {
    
        if(carlength!==undefined){
          const jsont = JSON.stringify(carlength);
          localStorage.setItem("carlength", jsont);}
      },[carlength])
    };
   
    export default CarsLength