
import "./TabFooter.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { upReset } from "../../_actions/updateForm";


const TabFooter = () => {
    const post = useSelector( state => state.updateForm )
    const dispatch = useDispatch()
    const [formTrue, setFormTrue] = useState(false);
   
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
   };
   
   const handleClick2 = () => {
      return setFormTrue(false)
   };
  
    
    return (
        <footer className="footer">
            <Link to="/1">
     <button type="button"  onClick={handleClick2} className={formTrue ? 'btn-flash' : 'ftabs'}>
          Add Car
     </button>
 </Link>
 <Link to="/2">
     <button className="ftabs" type="button" onClick={handleClick}>
          Cars
     </button>
 </Link>
 <Link to="/3">
     <button className="ftabs" type="button" onClick={handleClick}>
          Request
     </button>
 </Link>
 <Link to="/4">
     <button className="ftabs" type="button" onClick={handleClick}>
          Pulls
     </button>
 </Link>
 <Link to="/5">
     <button className="ftabs" type="button" onClick={handleClick}>
          OutnReturning
     </button>
 </Link>
 <Link to="/6">
     <button className="ftabs" type="button" onClick={handleClick}>
          Completed
     </button>
 </Link>
 <Link to="/7">
     <button className="ftabs" type="button" onClick={handleClick}>
          Report
     </button>
 </Link>
 <Link to="/8">
     <button className="ftabs" type="button" onClick={handleClick}>
          Settings
     </button>
 </Link>
 <Link to="/9">
     <button className="ftabs" type="button" onClick={handleClick}>
          Click Me!
     </button>
     </Link>
 <Link to="/10">
     <button className="ftabs" type="button" onClick={handleClick}>
          Click Me!
     </button>
    </Link>
   
     </footer>
    );
}
export default TabFooter

