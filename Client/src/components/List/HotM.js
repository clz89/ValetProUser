import React, {useState, useEffect, useReducer} from "react"
import { batch, useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../../_actions/subCars";
import { createPull } from "../../_actions/pulls";
import Pay from "../List/Pay";
import { upReset } from "../../_actions/updateForm";
import { updateCar } from "../../_actions/subCars";
import { updatePull, deletePull } from "../../_actions/pulls";
import { createComp } from "../../_actions/completed";
import { form } from "react-validation/build/form";
import { createOut } from "../../_actions/outnr";
import * as api from '../../_api';
const formReducer = (state, event) => {

    if(event.reset) {
      return {
      
     }
  }
   return {
       ...state,
     [event.name]: event.value
   }}

const HotM = ({ pullId, setModal, tableData}) => {

    const post = useSelector( state => state.updateForm )
    const pos = Object.values(post)

   useEffect (() => {
    const jso = JSON.stringify(post);
      localStorage.setItem("upform2", jso);
    })
  
      const json = localStorage.getItem("pay");
  const savedNotes = JSON.parse(json);
      
  const dispatch = useDispatch() 

  const length = pos.length

  const [formData, setFormData] = useReducer(formReducer,  
  length!==0 && post._id!==1 ? post : savedNotes ? savedNotes : "");  
  const[status, setStatus] = useState(false)

    const handleChange = (event) => {
      setFormData({
        name: event.target.name,
        value: event.target.type === 'checkbox' ? event.target.checked : event.target.value 
      });
    }
    const handleCheckout = (e) => {
      const evt = pullId
      tableData.filter((data) => {
      if (evt === data._id) {
       data.status=e.target.value
        data.complete="Complete"
        dispatch(updatePull(data._id, formData))
        setStatus(true)
        }
    })}


  
    const handleRoom = (e) => {
      const evt = pullId
      tableData.filter((data) => {
      if (evt === data._id) {
      data.room=e.target.value
     dispatch(updatePull(data._id, formData))
     setModal(false)
      }
    })}
    const handleNotPaid = (e) => {
      const evt = pullId
        tableData.filter((data) => {
         if(evt===data._id && data.status==="Returning" ){ 
          data.complete="Completed"
          data.status="Returning"
          dispatch(deletePull(data._id))      
          api.createOut(data) 
          setModal(false)
        }else if(evt===data._id && data.status!=="Returning"){
          data.complete="Completed"
          data.status="Not Paid"
          dispatch(deletePull(data._id))      
          api.createComp(data)
          setModal(false)
        } })}

        const handleTypeChange = () => {
          const evt = pullId
          tableData.filter((data) => {
          if (evt === data._id && data.type==="ON") {
          data.type="DAY"
          data.hot=""
          dispatch(updatePull(data._id, data))}
          
          })}

        const handleModal = () => {
            dispatch(upReset(post))
            setModal(false)
        }

        const jsont = JSON.stringify(formData);
        localStorage.setItem("pay", jsont);
    
        
    return (
        <div className='backshadow' onClick={handleModal}>
            <div className='custom-modal' onClick={(e) => e.stopPropagation()}>
               {pullId}
             <div>
                  {!status &&(<div>
                    <button  onClick={handleCheckout} name="status" value="Checking Out">CheckOut</button>
                    <button onClick={handleCheckout} name="status" value="Returning">Returning</button>
                  </div>)}
               <label> 
                    <p>Room:</p>
                  <input className="rinput" placeholder="Room #..."name="room" onChange={handleChange} value={formData.room || ''} />
                  <button className="mbtn room" onClick={handleRoom} value={formData.room || ''} >Submit</button>
                  </label>
                  <div className="bdiv">
                  <button className="mbtn" onClick={handleNotPaid} name="hot" value="Not paid" >Not paid</button>
                  <button className="mbtn" type="button"  name="pulls" value="Pull" onClick={handleTypeChange}>Change to day use</button>
                 </div>
                </div>
         </div>
        </div>
    )
}

export default HotM;