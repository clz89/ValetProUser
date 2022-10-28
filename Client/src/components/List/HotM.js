import React, {useEffect, useReducer} from "react"
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

    const handleChange = (event) => {
      setFormData({
        name: event.target.name,
        value: event.target.type === 'checkbox' ? event.target.checked : event.target.value 
      });
    }
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
          dispatch(deletePull(data._id))      
          api.createOut(data) 
          setModal(false)
        }else if(evt===data._id && data.status!=="Returning"){
          data.complete="Completed"
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
        <div className='backshadow'>
            <div className='custom-modal'>
                <div className="delete-icon"
                onClick={handleModal}>x</div>

                   {pullId}

                  
                   <div>
              
                
                  <label> 
                    <p>Room:</p>
                  <input placeholder="Room #..."name="room" onChange={handleChange} value={formData.room || ''} />
                  <button onClick={handleRoom} value={formData.room || ''} >Room</button>
                  <button onClick={handleNotPaid} name="hot" value="Not paid" >Not paid</button>
                  <button type="button"  name="pulls" value="Pull" onClick={handleTypeChange}>Change to day use</button>


                  </label>
                
      
                </div>
                
                
        </div>
        </div>
    )
}

export default HotM;