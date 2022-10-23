import React, {useEffect, useReducer} from "react"
import { batch, useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../../_actions/subCars";
import { createPull } from "../../_actions/pulls";
import Pay from "../List/Pay";
import { upReset } from "../../_actions/updateForm";
import { updateCar } from "../../_actions/subCars";
import { updatePull } from "../../_actions/pulls";
import { form } from "react-validation/build/form";

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
              
                {formData.hot &&(
                  <label> 
                    <p>Room:</p>
                  <input placeholder="Room #..."name="room" onChange={handleChange} value={formData.room || ''} />
                  <button onClick={handleRoom} value={formData.room || ''} >Room</button>
                  </label>
                )}
      
                </div>
                
                
        </div>
        </div>
    )
}

export default HotM;