import React, {useState, useEffect} from "react";
import List from "../List/List";
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from "../../_actions/subCars";
import CarsM from "./CarsM";

const Cars = ({list, setList}) => {
    const posts = useSelector( state => state.subCars )
    const x = getCars()
    
    const cars = true
    return (
    
    <List {...{ cars, setList, list, CarsM, posts, x}}/>

    )
}
export default Cars;