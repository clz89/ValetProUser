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

const PullsM = ({ pullId, setModal, tableData}) => {

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
  length!==0 && post._id!==1 ? post : savedNotes ? savedNotes : {room: 880, type: "on"});   


  const handleCheckOut = (e) => {
    const evt = pullId
    tableData.filter((data) => {
    if (evt === data._id) {
    if(e.target.value==="Returning"){
    data.status=e.target.value
    data.complete="Completed"
    dispatch(deletePull(data._id))
    api.createOut(data)
    setModal(false)
      }else{
    data.status=e.target.value
    data.complete="Completed"
    dispatch(deletePull(data._id))
    api.createComp(data)
    setModal(false)
      }
    }
  })}  
             
            
        useEffect(() => {
          if(formData.status !== post.status ){
            const _id = formData._id
            dispatch(updatePull(_id, formData))
            dispatch(upReset(post))
              setFormData({reset: true}) 
            setModal(false)
            
             }
         })

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
      }
    })} 
            

    const handleTypeChange = () => {
      const evt = pullId
      tableData.filter((data) => {
      if (evt === data._id && data.type==="ON") {
      data.type="DAY"
      data.hot=""
      dispatch(updatePull(data._id, data))
      }else if(evt === data._id && data.type==="DAY") {
        data.type="ON"
        dispatch(updatePull(data._id, data))}
    })}
    const handleNotPaid = (e) => {
      const evt = pullId
        tableData.filter((data) => {
         if(evt===data._id ){ 
          data.complete="Completed"
          data.hot="Hot"
          data.status="Not Paid"
          dispatch(deletePull(data._id))      
          api.createComp(data) 
          setModal(false)
        }})}
       

       
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

                   {formData.type==="ON"&&(
                   <div className="bdiv">
                <button className="mbtn" type="button" name="status" value="Checked Out" onClick={handleCheckOut}>Checking Out</button>
                <button className="mbtn" type="button" name="status" value="Returning" onClick={handleCheckOut}>Returning</button>
                <button className="mbtn" type="button"  name="pulls" value="Pull" onClick={handleTypeChange}>Change to day use</button>
                </div>)}

                  {formData.type==="DAY"&&(
                <div className="bdiv">
                 { <Pay {...{setModal, tableData, pullId}}/> } 
                 
                 <button className="mbtn" type="button"  name="pulls" value="Pull" onClick={handleTypeChange}>Change to overnight</button>
                 <button className="mbtn" onClick={handleNotPaid} name="hot" value="Not paid" >Not paid</button>
                
                </div>
                )}

                </div>  
                
        </div>
    )
}

export default PullsM;