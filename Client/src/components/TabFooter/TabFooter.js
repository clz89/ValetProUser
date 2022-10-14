
import "./TabFooter.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { upReset } from "../../_actions/updateForm";


const TabFooter = () => {
    const post = useSelector( state => state.updateForm )
    const dispatch = useDispatch()
    const [formTrue, setFormTrue] = useState();
    
   useEffect(() => {
    const json = localStorage.getItem("formdata");
    const savedNotes = JSON.parse(json);
    const form = {room:"880", type: "on"};
    let o = Object.fromEntries(Object.entries(savedNotes).filter(([_, v]) => v !== ""));
    if(o===form){
    setFormTrue()
    console.log(o)
    console.log(form)
    console.log(formTrue)}
   }, [formTrue]
   )
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
      return setFormTrue(false)
   };
  
    
    return (
        <footer className="footer">
            <Link to="/1">
     <button type="button"  className={formTrue ? 'btn-flash' : 'ftabs'}>
          Add Car
     </button>
 </Link>
 <Link to="/2">
     <button className="ftabs" type="button"   >
          Cars
     </button>
 </Link>
 <Link to="/3">
     <button className="ftabs" type="button"  >
          Request
     </button>
 </Link>
 <Link to="/4">
     <button className="ftabs" type="button"  >
          Pulls
     </button>
 </Link>
 <Link to="/5">
     <button className="ftabs" type="button"   >
          OutnReturning
     </button>
 </Link>
 <Link to="/6">
     <button className="ftabs" type="button"   >
          Completed
     </button>
 </Link>
 <Link to="/7">
     <button className="ftabs" type="button"   >
          Report
     </button>
 </Link>
 <Link to="/8">
     <button className="ftabs" type="button"   >
          Settings
     </button>
 </Link>
 <Link to="/9">
     <button className="ftabs" type="button"   >
          Click Me!
     </button>
     </Link>
 <Link to="/10">
     <button className="ftabs" type="button"   >
          Click Me!
     </button>
    </Link>
   
     </footer>
    );
}
export default TabFooter

