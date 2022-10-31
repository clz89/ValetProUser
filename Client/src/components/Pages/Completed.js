import React from "react";
import List from "../List/List"
import { useSelector } from 'react-redux';
import { getComps } from "../../_actions/completed";
const Completed = ({formT, scan, setScan, setFormT, setSubCar, subcar, list, setList}) => {
    const posts = useSelector( state => state.subCars )
    const x = getComps()
    return (
    <List {...{formT, scan, setScan, setFormT, setSubCar, subcar, list, setList, posts, x}}/>

    )
}
export default Completed;