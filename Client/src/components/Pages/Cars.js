import React, {useState, useEffect} from "react";
import List from "../List/List";
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from "../../_actions/subCars";
import CarsM from "./CarsM";
import SubCar from "../SubCar/SubCar";

const Cars = ({setSubCar, subcar, list, setList}) => {
    const posts = useSelector( state => state.subCars )
    const x = getCars()
        
   
    return (
        <><div className="main">
        </div><List {...{ setSubCar, subcar, setList, list, CarsM, posts, x }} /></>

    )
}
export default Cars;