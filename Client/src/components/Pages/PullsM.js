import React, {useEffect, useReducer} from "react"
import { batch, useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../../_actions/subCars";
import { createPull } from "../../_actions/pulls";
import Pay from "../List/Pay";
import { upReset } from "../../_actions/updateForm";
import { updateCar } from "../../_actions/subCars";
import { updatePull } from "../../_actions/pulls";

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


      const handleSubmit = (e) => {
          e.preventDefault();
        if (formData.price && formData.payment){
          const _id = formData._id
          dispatch(updateCar(_id, formData)) 
          dispatch(updatePull(_id, formData))
          dispatch(upReset(post))
          setFormData({reset: true}) 
          setModal(false)  
           
          } 
      
      }

          /* useEffect(() => {
              if (formData.price !== post.price && formData.payment){
              const _id = formData._id
              dispatch(updateCar(_id, formData))
              dispatch(updatePull(_id, formData))
              dispatch(upReset(post))
              setFormData({reset: true}) 
              setModal(false)   
              }     

            }) */
             
            
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
           
            

    const handlePull = () => {
        const evt = pullId
        tableData.filter((data) => {
        if (evt === data._id) {
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        setModal(false)
        }
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

                   {formData.type==="ON"&&(
                   <div>
                <button type="button" name="status" value="checkout" onClick={handleChange}>Checking Out</button>
                <button type="button" name="status" value="return" onClick={handleChange}>Returning</button>
      
                </div>)}
                  {formData.type==="DAY"&&(
                <div>
                 { <Pay {...{setModal, tableData, pullId}}/> } 
                
                </div>)}
                </div>  
                
        </div>
    )
}

export default PullsM;