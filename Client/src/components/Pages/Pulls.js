import React, {useEffect} from "react";
import List from "../List/List"
import { useSelector } from 'react-redux';
import { getPulls, deletePull } from "../../_actions/pulls";

const Pulls = ({setList, list}) => {
    const posts = useSelector( state => state.pulls )
    const x = getPulls()
    
    const pulls = true
    console.log(list)
    return (
    <List setList={setList} {...{ pulls, setList, list, posts, x}}/>

    )
}
export default Pulls;