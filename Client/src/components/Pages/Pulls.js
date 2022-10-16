import React, {useEffect} from "react";
import List from "../List/List"
import { useSelector } from 'react-redux';
import { getPulls, deletePull } from "../../_actions/pulls";
import PullsM from "./PullsM"

const Pulls = ({setList, list}) => {
    const posts = useSelector( state => state.pulls )
    const x = getPulls()
    const pulllength = Object.keys(posts).length;
    useEffect(()=> {
        if(pulllength!==undefined){
          const jsont = JSON.stringify(pulllength);
          localStorage.setItem("pulllength", jsont);}
      },[pulllength])
    return (
    <List  {...{ pulllength, PullsM, setList, list, posts, x}}/>

    )
}
export default Pulls;