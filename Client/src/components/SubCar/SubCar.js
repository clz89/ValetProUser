import React, { useReducer, useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import './SubCar.css';
import {  createCar, updateCar } from '../../_actions/subCars';
import { updatePull } from '../../_actions/pulls';
import { updateComp } from '../../_actions/completed';
import { updateOut } from '../../_actions/outnr';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { upReset } from '../../_actions/updateForm';
import Modal from './Modal';
import * as api from '../../_api';

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
function SubCar({ list, tableData, setTableData, posts, x, setSubCar, formT, setFormT}) {

  const post = useSelector( state => state.updateForm )
  const pos = Object.values(post)
  const [modal, setModal] = useState(false);
  const [modalid, setModalId] = useState("")

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
    const sortedData = tableData.sort((a, b) => {
      const dateAInMillis = (new Date(a.createdAt)).getTime();
      const dateBInMillis = (new Date(b.createdAt)).getTime();
      
      return dateBInMillis - dateAInMillis;})

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
      setSubCar(false) }, 100)
      }else{
        if(list==="cars"){
      dispatch(createCar(formData))
      setFormData({reset: true}) 
      setTimeout(() => {
        setSubCar(false)
      }, 200);
    }
      else{
        api.createCar(formData)
        setFormData({reset: true}) 
        setTimeout(() => {
          setSubCar(false)
        }, 200);
       
        }  
      }}
    
    
  
    
      const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
        };

        const handleModal = (e) => {
          setModalId(e.target.name)
          setModal(true);
          }
          const handleSubCar = () =>{
            setSubCar(false);
            
          }

          
        const jsont = JSON.stringify(formData);
        localStorage.setItem("formdata", jsont);

   return (
    <div className='backshadow2' onClick={handleSubCar}>
            <div className='custom-modal2'onClick={(e) => e.stopPropagation()}>
                <div className="delete-icon2"
                onClick={handleSubCar}>x</div>

      {modal===true&&(
        <Modal setModal={setModal}  {...{modalid, formData, setFormData, setModal}}/>)}
      <h1>Submit Car</h1>
      <form >
        <fieldset >
        <div className="btndiv">
            <button className='clearbtn' type="button" onClick={resetForm} >Clear</button>
            <button className='clearbtn' type="button" onClick={handleType} >{formData.type || ''}</button>
            <button className="clearbtn" type="submit" onClick={handleSubmit} >Submit</button>
            
         </div>
         <div className='inprow'>
          <label>
            <p>Ticket #:</p>
            <input name="ticket" onChange={handleChange} value={formData.ticket || ''} />
          </label>
          <label>
            <p>Price:</p>
            <button type="button" name="price" value={formData.price || ''} onClick={handleModal}>.........
            {formData.price || 'Choose price'}.........</button>
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
             <p>Departure:</p>
             <input type="date"  name="depart" onChange={handleChange} value={formData.depart || ''} />
          </label>
          <label>
             <p>Retrieve at:</p>
             <input  name="retrieve" onChange={handleChange} value={formData.retrieve || ''} />
          </label>
          
          </div>
          <div className='inprow'>
          <label>
             <p>Vehicle make:</p>
             <button type="button" name="vmake" value={formData.vmake || ''} onClick={handleModal}>
            {formData.vmake || 'Choose make'}</button>
          </label>
          <label>
             <p>Notes:</p>
             <input type="textfield" name="notes" onChange={handleChange} value={formData.notes || ''} />
          </label>
          </div>
          <div className='inprow'>
          <label>
            <p>Vehicle color:</p>
            <button type="button" name="vcolor" value={formData.vcolor || ''} onClick={handleModal}>
            {formData.vcolor || 'Choose color'}</button>
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
    </div>
    
    
  )
}

export default SubCar;