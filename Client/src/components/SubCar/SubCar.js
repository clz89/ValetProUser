import React, { useReducer, useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import './SubCar.css';
import {  createCar, updateCar } from '../../_actions/subCars';
import { updatePull } from '../../_actions/pulls';
import { updateComp } from '../../_actions/completed';
import { updateOut } from '../../_actions/outnr';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { upForm, upReset } from '../../_actions/updateForm';
import Modal from './Modal';
import * as api from '../../_api';

import _, { fromPairs } from 'lodash'

const formReducer = (state, event) => {

   if(event.reset) {     
  return{price: "$44", type: "ON"}
    }else if(state.vcolor){
      return{
        ...state,
        [event.name]: event.value
      }
    }
  return {
      ...state,
    [event.name]: event.value
  }
  
}
function SubCar({vehicle, setVehicle, scan, setScan, list, tableData, setTableData, posts, x, setSubCar, formT, setFormT}) {

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

  const json2 = localStorage.getItem("scan");
  const scan1 = JSON.parse(json2);
  
    
  const dispatch = useDispatch() 

  const length = pos.length

  const [formData, setFormData] = useReducer(formReducer,  
  scan1 ? scan1 : length!==0 && post._id!==1 ? post : savedNotes ? savedNotes : {price:"$44", type: "ON", vehicle:""});
    
  let navigate = useNavigate();

 /* useEffect(() => {
 
    const json = JSON.stringify(vehicle.vcolor+" "+vehicle.vmake)
    const vstring1 = json.replaceAll("[/']","");
    formData.vehicle=vstring1
    console.log(vstring1)
    },[formData]) */

    useEffect(() => {
      const form = {price:"$44", type: "ON", vehicle:""}
      if(formData.vehicle===true && post._id==="1"){
      setFormData(form);}
      } ,[formData, post._id])
  

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

 const handleClick = () => {
const form = {price:"$44", type: "ON"};
let o = Object.fromEntries(Object.entries(formData).filter(([_, v]) => v !== ""));
 const formt = _.isEqual(o, form);
    if (formData._id===post._id)  {  
     setFormData({reset: true})
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

    const resetForm = () => {
      setFormT(false)
      const jsont = JSON.stringify(null);
        localStorage.setItem("scan", jsont);
        setVehicle({vcolor:"", vmake:""})
       setFormData({reset: true})
       dispatch(upReset(post))
  
    }
  
  const handleSubmit = (event ) => {
    event.preventDefault();
    setFormT(false)

    const json = JSON.stringify(vehicle.vcolor+" "+vehicle.vmake)
    const vstring1 = json.replaceAll("[/']","");
    formData.vehicle=vstring1
    console.log(vstring1)
      if (formData._id === post._id){
      const _id = formData._id
      dispatch(updateCar(_id, formData))
      dispatch(updatePull(_id, formData))
      dispatch(updateComp(_id, formData))
      dispatch(updateOut(_id, formData))
      dispatch(upReset(post))
      setFormData({reset: true})
      setTimeout(() => {
        setVehicle({vcolor:"", vmake:""})
        const jsont = JSON.stringify(null);
        localStorage.setItem("scan", jsont);
      setSubCar(false) 
      }, 100)
      }else{
        if(list==="cars"){
      dispatch(createCar(formData))
      setFormData({reset: true}) 
      setTimeout(() => {
        setVehicle({vcolor:"", vmake:""})
        const jsont = JSON.stringify(null);
        localStorage.setItem("scan", jsont);
        setSubCar(false)
      }, 200);
    }
      else{
        api.createCar(formData)
        setFormData({reset: true}) 
        setTimeout(() => {
          setSubCar(false)
          setVehicle({vcolor:"", vmake:""})
          const jsont = JSON.stringify(null);
          localStorage.setItem("scan", jsont);
        }, 200);
       
        }  
      }}
    
      const handleChange = event => {
        const jsont = JSON.stringify(null);
        localStorage.setItem("scan", jsont);
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
            handleClick()
            setTimeout(() => {
              setSubCar(false)
            }, 200);
            
          }
          const handleScan = () => {
            setScan(true)
            setSubCar(false)
          }

          
        const jsont = JSON.stringify(formData);
        localStorage.setItem("formdata", jsont);

   return (
    <div className='backshadow2' onClick={handleSubCar}>
            <div className='custom-modal2'onClick={(e) => e.stopPropagation()}>

      {modal===true&&(
        <Modal setModal={setModal}  {...{vehicle, setVehicle, modalid, formData, setFormData, setModal}}/>)}
         <div className='h1div'>
         <h1>
        Submit Car:
      </h1>
        <button className='clearbtn' onClick={handleScan}>Scanner</button>
      </div>
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
            <button className='but' type="button" name="price" value={formData.price || ''} onClick={handleModal}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;{formData.price || 'Choose price'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
             <button className='but' type="button" name="vmake" value={formData.vmake || ''} onClick={handleModal}>
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
            <button className='but' type="button" name="vcolor" value={formData.vcolor || ''} onClick={handleModal}>
            {formData.vcolor || 'Choose color'}</button>&nbsp;
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