import React from "react";
import List from "../List/List"
import { useSelector } from 'react-redux';
import { getOuts } from "../../_actions/outnr";

const Outnr = ({setFormT, setSubCar, subcar, list, setList}) => {
    const posts = useSelector( state => state.outnr )
    const x = getOuts()
    
    return (
    <List {...{setFormT, setSubCar, subcar, list, setList, posts, x}}/>

    )
}
export default Outnr;