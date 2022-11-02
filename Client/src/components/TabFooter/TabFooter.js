
import "./TabFooter.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { upReset } from "../../_actions/updateForm";
import _ from 'lodash'


const TabFooter = ({formTrue, setFormTrue, formT, setFormT, setSubCar}) => {
    const post = useSelector( state => state.updateForm )

    const dispatch = useDispatch()
    


    const handleClick = (e) => {
        
     setFormTrue(e.target.value)
     
    const json = localStorage.getItem("formdata");
    const savedNotes = JSON.parse(json);
        const form = {price:"$44", type: "ON", vehicle:"" };
   let o = Object.fromEntries(Object.entries(savedNotes).filter(([_, v]) => v !== ""));
    const uptrue = _.isEqual(post, o);
    const formt = _.isEqual(o, form);
       if (uptrue)  {  
        const jsont = JSON.stringify(form);
        localStorage.setItem("formdata", jsont);
        setFormT(false);
        dispatch(upReset(post));
         console.log(formT);
      }else if (formt){
        setFormT(false);

        console.log(formT);
      }else{
      setFormT(true);   

      console.log(formT);};
      console.log(post);


    }

    useEffect(() => {
        const json = localStorage.getItem("formdata");
        const savedNotes = JSON.parse(json);
            const form = {price:"$44", type: "ON", vehicle:""};
        let o = Object.fromEntries(Object.entries(savedNotes ? savedNotes : "").filter(([_, v]) => v !== ""));
        const uptrue = _.isEqual(post, o);
        const formt = _.isEqual(o, form); 
           if (uptrue)  {  
           const jsont = JSON.stringify(form);
          localStorage.setItem("formdata", jsont);
           setFormT(false);
           dispatch(upReset(post));
             console.log(formT)
          }else if (formt){
            setFormT(false);

          }else{
          setFormT(true);   

          console.log(formT);
          console.log(post);
        };
    },[dispatch])

   
   const handleClick2 = () => {
      setSubCar(true)
        };

    useEffect(()=> {
        const states2 = {formT, formTrue}
        const jsont = JSON.stringify(states2);
        localStorage.setItem("states", jsont);})
  
      return (
        <footer className="footer">
 
 <Link to="/2" >
     <button className={formTrue==="2" ? 'btn-red' : 'ftabs'} value="2" type="button" onClick={handleClick}   >
      Cars
     </button>
 </Link>
 <Link to="/3" >
     <button className={formTrue==="3" ? 'btn-red' : 'ftabs'} value="3" type="button" onClick={handleClick} >
     Request
     </button>
 </Link>
 <Link to="/4">
     <button className={formTrue==="4" ? 'btn-red' : 'ftabs'} value="4" type="button" onClick={handleClick} >
      Pulls
     </button>
 </Link>
 <Link to="/5">
     <button className={formTrue==="5" ? 'btn-red' : 'ftabs'} value="5" type="button" onClick={handleClick}  >
      OutnReturning
     </button>
 </Link>
 <Link to="/6">
     <button className={formTrue==="6" ? 'btn-red' : 'ftabs'} value="6" type="button"  onClick={handleClick} >
     Completed
     </button>
 </Link>
 <Link to="/7">
     <button className={formTrue==="7" ? 'btn-red' : 'ftabs'} value="7" type="button"  onClick={handleClick}  >
          Report
     </button>
 </Link>
 <Link to="/8">
     <button className={formTrue==="8" ? 'btn-red' : 'ftabs'} value="8" type="button"  onClick={handleClick}  >
          Settings
     </button>
 </Link>
 <Link to="/9">
     <button className={formTrue==="9" ? 'btn-red' : 'ftabs'} value="9"type="button"  onClick={handleClick}  >
          Click Me!
     </button>
     </Link>
 <Link to="/10">
     <button className={formTrue==="10" ? 'btn-red' : 'ftabs'} value="10" type="button" onClick={handleClick}  >
          Click Me!
     </button>
    </Link>

    <button type="button"  value="1" className={formT ? 'btn-flash' : 'ftabs'} onClick={handleClick2}>
          Add Car
     </button>
   
     </footer>
    );
}
export default TabFooter

