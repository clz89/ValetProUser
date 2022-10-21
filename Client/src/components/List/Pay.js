import React, { useReducer, useState, useEffect } from 'react';
import { createCar, updateCar } from '../../_actions/subCars';
import { updatePull } from '../../_actions/pulls';
import { useDispatch, useSelector } from 'react-redux';
import { upReset } from '../../_actions/updateForm';
const formReducer = (state, event) => {

   if(event.reset) {
     return {
     
    }
 }
  return {
      ...state,
    [event.name]: event.value
  }
  
}
function Pay({ pullId, setModal}) {

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

      const handleChange = (event) => {     
        if(formData._id === post._id){     
          setFormData({
            name: event.target.name,
            value: event.target.type === 'checkbox' ? event.target.checked : event.target.value
          })}}; 

      const handleSubmit = (e) => {
          e.preventDefault();
        if (!formData.complete && formData.price && formData.vcolor){
          const _id = formData._id    
          dispatch(updateCar(_id, formData))
          dispatch(updatePull(_id, formData))
          dispatch(upReset(post))
          setFormData({reset: true}) 
          setModal(false)   } 
        }
    
        const jsont = JSON.stringify(formData);
        localStorage.setItem("pay", jsont);
                         
    return (
   <div>
    <form >
        <p>Pay Ticket</p>
        
        <div >
            <label>
                <input type="button" name="price" value={formData.price || ''} />
            </label>
            <label>
                <input type="button" name="price" value="$20" onClick={handleChange} />
            </label>
            <label>
                <input type="button" name="price" value="$10" onClick={handleChange} />
            </label>
            <label>
                <input type="button" name="price" value="$7" onClick={handleChange} />
            </label>
            <label>
                <input type="button" name="price" value="$44" onClick={handleChange} />
            </label>
        </div>
        {pullId}
        <div>
            <label>
                <input type="button" name="vcolor" value={formData.vcolor || ''} />
            </label>
            <label>
                <input type="button" name="vcolor" value="Cash" onClick={handleChange} />
            </label>
            <label>
                <input type="button" name="vcolor" value="CreditCard" onClick={handleChange} />
            </label>
            <label>
                <input type="button" name="vcolor" value="FrontDesk" onClick={handleChange} />
            </label>
            <label>
                <input type="button" name="vcolor" value="Bitcoin" onClick={handleChange} />
            </label>
        </div>
        <div>
        <button  type="submit"  onClick={handleSubmit} >Submit</button>
        </div>
        </form>
    </div>
     )};
export default Pay;