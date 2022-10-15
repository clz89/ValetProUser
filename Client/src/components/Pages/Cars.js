import React, {useState, useEffect} from "react";
import List from "../List/List";
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from "../../_actions/subCars";
import CarsM from "./CarsM";

const Cars = ({list, setList}) => {
    const posts = useSelector( state => state.subCars )
    const x = getCars()
    const y = <CarsM />
  
    console.log(list)
    return (
    
    <List {...{ setList, list, y, posts, x}}/>

    )
}
export default Cars;