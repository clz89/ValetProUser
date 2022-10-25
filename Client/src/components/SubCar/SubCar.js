import React, { useReducer, useState, useEffect } from 'react';
import './SubCar.css';
import { createCar, updateCar } from '../../_actions/subCars';
import { updatePull } from '../../_actions/pulls';
import { updateComp } from '../../_actions/completed';
import { updateOut } from '../../_actions/outnr';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { upReset } from '../../_actions/updateForm';

import _ from 'lodash'

const formReducer = (state, event) => {

   if(event.reset) {
      
  return{price: "$44", type: "ON"}
    
 }
  return {
      ...state,
    [event.name]: event.value
  }
  
}
function SubCar({formT, setFormT}) {

  const post = useSelector( state => state.updateForm )
  const pos = Object.values(post)


  useEffect (() => {
    const jso = JSON.stringify(post);
      localStorage.setItem("upform", jso);
    })

   const json = localStorage.getItem("formdata");
  const savedNotes = JSON.parse(json);
    
  const dispatch = useDispatch() 

  const length = pos.length

  const [formData, setFormData] = useReducer(formReducer,  
  length!==0 && post._id!==1 ? post : savedNotes ? savedNotes : {price:"$44", type: "ON"});
    
  let navigate = useNavigate();

  useEffect(()=>{
    if(formData.vip){
      formData.vip="VIP";
    }else if(!formData.vip){
      formData.vip=""; }
  })
  useEffect(()=>{
    if(formData.outfront){
      formData.outfront="outfront";
    }else if(!formData.outfront){
      formData.outfront=""; }
  })

  const handleType = () => {
    if(formData.type==="ON"){
    formData.price="$20"
    formData.type="DAY"
    setFormData(formData)
    }else if(formData.type==="DAY"){
      formData.price="$44"
      formData.type="ON"
      setFormData(formData)

    }
 }

    const resetForm = () => {
       setFormData({reset: true})
       
    }
  const handleSubmit = (event ) => {
    event.preventDefault();
      if (formData._id === post._id){
      const _id = formData._id
      dispatch(updateCar(_id, formData))
      dispatch(updatePull(_id, formData))
      dispatch(updateComp(_id, formData))
      dispatch(updateOut(_id, formData))
      dispatch(upReset(post))
      setFormData({reset: true})
      setTimeout(() => {
      navigate(-1) }, 200)
      }else{
      dispatch(createCar(formData))
      setFormData({reset: true})}
       }
    
      const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
        };
        const jsont = JSON.stringify(formData);
        localStorage.setItem("formdata", jsont);

   return (

    <div className="main">
      <h1>Submit Car</h1>
      <form >
        <fieldset >
        <div className="btndiv">
         <button className='clearbtn' type="button" onClick={resetForm} >Clear</button>
         <button className="clearbtn" type="submit" onClick={handleSubmit} >Submit</button>
         <label>
            <p>Type:</p>
            </label>
            <button className='clearbtn' type="button" onClick={handleType} >{formData.type || ''}</button>
         </div>
         <div className='inprow'>
          <label>
            <p>Ticket #:</p>
            <input name="ticket" onChange={handleChange} value={formData.ticket || ''} />
          </label>
          <label>
            <p>Price:</p>
            <select name="price" onChange={handleChange} value={formData.price || ''}>
                <option value="">--Please choose an option--</option>
                <option value="$44">$44</option>
                <option value="$20">$20</option>
                <option value="$10">$10</option>
            </select>
          </label>
          </div>
          <div className='inprow'>
        <label>
             <p>Name:</p>
             <input name="name" onChange={handleChange} value={formData.name || ''} />
          </label>
          <label>
            <p>VIP:</p>
            <input
              checked={formData.vip || ""}
              name="vip"
              onChange={handleChange}
              type="checkbox"
              value="VIP"
            />
          </label>
          </div>
          <div className='inprow'>
        <label>
             <p>Room:</p>
             <input name="room" onChange={handleChange} value={formData.room || ''} />
          </label>
          <label>
             <p>Retrieve at:</p>
             <input name="retrieve" onChange={handleChange} value={formData.retrieve || ''} />
          </label>
          </div>
          <div className='inprow'>
        <label>
             <p>Departure:</p>
             <input name="depart" onChange={handleChange} value={formData.depart || ''} />
          </label>
          <label>
            <p>Out front:</p>
            <input
              checked={formData.outfront || ""}
              name="outfront"
              onChange={handleChange}
              type="checkbox"
              value="outfront"
            />
          </label>
          </div>
          <div className='inprow'>
          <label>
             <p>Vehicle make:</p>
             <input name="vmake" onChange={handleChange} value={formData.vmake || ''} />
          </label>
          <label>
             <p>Notes:</p>
             <input type="textfield" name="notes" onChange={handleChange} value={formData.notes || ''} />
          </label>
          </div>
          <div className='inprow'>
          <label>
            <p>Vehicle color:</p>
            <select name="vcolor" onChange={handleChange} value={formData.vcolor || ''}>
                <option value="">--Please choose an option--</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Gray">Gray</option>
            </select>
            </label>
            <label>
            <p>Parking spot:</p>
            <input name="pspot" onChange={handleChange} value={formData.pspot || ''} />
          </label>
          </div>
          <div className='inprow'>
          <label>
             <p>Vehicle model:</p>
             <input name="vmodel" onChange={handleChange} value={formData.vmodel || ''} />
          </label>
          <label>
             <p>License plate #:</p>
             <input name="license" onChange={handleChange} value={formData.license || ''} />
          </label>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default SubCar;