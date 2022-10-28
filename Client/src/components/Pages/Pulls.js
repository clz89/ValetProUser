import React, {useEffect} from "react";
import List from "../List/List"
import { useSelector } from 'react-redux';
import { getPulls, deletePull } from "../../_actions/pulls";
import PullsM from "./PullsM"

const Pulls = ({setFormT, setSubCar, subcar, setList, list}) => {
    const posts = useSelector( state => state.pulls )
    const x = getPulls()
   
    
    return (
    <List  {...{setFormT, setSubCar, subcar, PullsM, setList, list, posts, x}}/>

    )
}
export default Pulls;