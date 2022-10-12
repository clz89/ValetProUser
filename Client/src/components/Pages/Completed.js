import React from "react";
import List from "../List/List"
import { useSelector } from 'react-redux';
import { getComps } from "../../_actions/completed";
const Completed = () => {
    const posts = useSelector( state => state.subCars )
    const x = getComps()
    return (
    <List {...{posts, x}}/>

    )
}
export default Completed;