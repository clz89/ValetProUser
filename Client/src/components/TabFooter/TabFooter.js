
import "./TabFooter.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { upReset } from "../../_actions/updateForm";
import _ from 'lodash'


const TabFooter = ({formT, setFormT}) => {
    const post = useSelector( state => state.updateForm )
    const dispatch = useDispatch()
    const [formTrue, setFormTrue] = useState();

   
        
     

  
     const handleClick = () => {
        
    const json = localStorage.getItem("formdata");
    const savedNotes = JSON.parse(json);
        const form = {room: 880, type: "on"}
    let o = Object.fromEntries(Object.entries(savedNotes).filter(([_, v]) => v !== ""));
    const uptrue = _.isEqual(post, o)
    const formt = _.isEqual(o, form)
       if (uptrue)  {  
        dispatch(upReset(post));   
        const jsont = JSON.stringify(form);
      localStorage.setItem("formdata", jsont);
       setFormT(false);
         console.log(formT)
      }else if (formt){
        setFormT(false);
        console.log(formT)
      }else{
      setFormT(true);   
      console.log(formT);};
    }
    useEffect(() => {
        const json = localStorage.getItem("formdata");
        const savedNotes = JSON.parse(json);
            const form = {room: 880, type: "on"}
        let o = Object.fromEntries(Object.entries(savedNotes).filter(([_, v]) => v !== ""));
        const uptrue = _.isEqual(post, o)
        const formt = _.isEqual(o, form)
           if (uptrue)  {  
            dispatch(upReset(post));          
            const jsont = JSON.stringify(form);
          localStorage.setItem("formdata", jsont);
           setFormT(false);
             console.log(formT)
          }else if (formt){
            setFormT(false);
            console.log(formT)
          }else{
          setFormT(true);   
          console.log(formT);};
},[dispatch])
   /* const handleClick = () => {
    const json = localStorage.getItem("formdata");
    const savedNotes = JSON.parse(json);
    const form = {room:"880", type: "on"}; 
    console.log(savedNotes);
    if(savedNotes===post){ 
      const jsont = JSON.stringify(form);
      localStorage.setItem("formdata", jsont);
      dispatch(upReset(post)); 
      setFormTrue(false);
    }
    else if(savedNotes===form){
    setFormTrue(false)
    }
    else{
        setFormTrue(true)
    };};
    const handleClick = () => {
    const json = localStorage.getItem("formdata");
    const savedNotes = JSON.parse(json);
    const form = {room: 880, type: "on"};  
    let o = Object.fromEntries(Object.entries(savedNotes).filter(([_, v]) => v !== ""));
      console.log(o)
      if (JSON.stringify(o) === JSON.stringify(post))
    {   dispatch(upReset(post))
        const jsont = JSON.stringify(form);
      localStorage.setItem("formdata", jsont);
       setFormTrue(false);
    } else if (JSON.stringify(o) === JSON.stringify(form))
    {   setFormTrue(false)
    } else{  
       setFormTrue(true)}
   }; */

   const handleClick2 = () => {
      return setFormT(false)
   };
  
    
    return (
        <footer className="footer">
            <Link to="/1">
     <button type="button"  className={formT ? 'btn-flash' : 'ftabs'}>
          Add Car
     </button>
 </Link>
 <Link to="/2">
     <button className="ftabs" type="button" onClick={handleClick}   >
          Cars
     </button>
 </Link>
 <Link to="/3">
     <button className="ftabs" type="button" onClick={handleClick} >
          Request
     </button>
 </Link>
 <Link to="/4">
     <button className="ftabs" type="button" onClick={handleClick} >
          Pulls
     </button>
 </Link>
 <Link to="/5">
     <button className="ftabs" type="button" onClick={handleClick}  >
          OutnReturning
     </button>
 </Link>
 <Link to="/6">
     <button className="ftabs" type="button"  onClick={handleClick} >
          Completed
     </button>
 </Link>
 <Link to="/7">
     <button className="ftabs" type="button"  onClick={handleClick}  >
          Report
     </button>
 </Link>
 <Link to="/8">
     <button className="ftabs" type="button"  onClick={handleClick}  >
          Settings
     </button>
 </Link>
 <Link to="/9">
     <button className="ftabs" type="button"  onClick={handleClick}  >
          Click Me!
     </button>
     </Link>
 <Link to="/10">
     <button className="ftabs" type="button" onClick={handleClick}  >
          Click Me!
     </button>
    </Link>
   
     </footer>
    );
}
export default TabFooter

