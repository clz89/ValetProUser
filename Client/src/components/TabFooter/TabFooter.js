
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

   
        
     

  
     const handleClick = (e) => {
     setFormTrue(e.target.value)   
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

   const handleClick2 = (e) => {
      return setFormTrue("1")
   };
      return (
        <footer className="footer">
            <Link to="/1">
     <button type="button"  value="1" className={formT || formTrue==="1" ? 'btn-flash' : 'ftabs'} onClick={handleClick2}>
          Add Car
     </button>
 </Link>
 <Link to="/2">
     <button className={formTrue==="2" ? 'btn-flash' : 'ftabs'} value="2" type="button" onClick={handleClick}   >
          Cars
     </button>
 </Link>
 <Link to="/3">
     <button className={formTrue==="3" ? 'btn-flash' : 'ftabs'} value="3" type="button" onClick={handleClick} >
          Request
     </button>
 </Link>
 <Link to="/4">
     <button className={formTrue==="4" ? 'btn-flash' : 'ftabs'} value="4" type="button" onClick={handleClick} >
          Pulls
     </button>
 </Link>
 <Link to="/5">
     <button className={formTrue==="5" ? 'btn-flash' : 'ftabs'} value="5" type="button" onClick={handleClick}  >
          OutnReturning
     </button>
 </Link>
 <Link to="/6">
     <button className={formTrue==="6" ? 'btn-flash' : 'ftabs'} value="6" type="button"  onClick={handleClick} >
          Completed
     </button>
 </Link>
 <Link to="/7">
     <button className={formTrue==="7" ? 'btn-flash' : 'ftabs'} value="7" type="button"  onClick={handleClick}  >
          Report
     </button>
 </Link>
 <Link to="/8">
     <button className={formTrue==="8" ? 'btn-flash' : 'ftabs'} value="8" type="button"  onClick={handleClick}  >
          Settings
     </button>
 </Link>
 <Link to="/9">
     <button className={formTrue==="9" ? 'btn-flash' : 'ftabs'} value="9"type="button"  onClick={handleClick}  >
          Click Me!
     </button>
     </Link>
 <Link to="/10">
     <button className={formTrue==="10" ? 'btn-flash' : 'ftabs'} value="10" type="button" onClick={handleClick}  >
          Click Me!
     </button>
    </Link>
   
     </footer>
    );
}
export default TabFooter

