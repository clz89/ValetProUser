import React, {useEffect, useState} from "react"
import { batch, useDispatch, useSelector } from "react-redux";
import { deleteCar, createCar, updateCar } from "../../_actions/subCars";
import { createPull, deletePull, updatePull } from "../../_actions/pulls";
import { upForm } from "../../_actions/updateForm";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { upReset } from "../../_actions/updateForm";
import { createOut, deleteOut } from "../../_actions/outnr";
import { createComp, deleteComp } from "../../_actions/completed";

const TableBody = ({ list, carlength, on, day, tableData, columns, setPullId, setModal }) => {

    const post = useSelector( state => state.updateForm )
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate()

   useEffect(() => {
      tableData.filter((data) => {
        if (!data.complete && data.checkout==="Returning") {
          data.complete="Complete"
          dispatch(updatePull(data._id, data))
        }      
      })
    }) 
  
    useEffect(() => {
      tableData.filter((data) => {
        if (!data.complete && data.checkout==="Checking Out") {
          data.complete="Complete"                 
          dispatch(updatePull(data._id, data))
        }      
      })
    }) 

    useEffect(() => {
      tableData.filter((data) => {
        if (list==="cars" && data.checkout==="checkout") {
          data.checkout="Checking Out"
          data.complete="Complete"
          dispatch(deleteCar(data._id))  
         dispatch(createPull(data))
        }else if(list==="pulls" && data.checkout==="checkout"){
          data.checkout="Checking Out"
          data.complete="Completed"
         dispatch(createComp(data))
        dispatch(deletePull(data._id)) 
        }
     })
     })

    useEffect(() => {
      tableData.filter((data) => {
        if (list==="cars" && data.checkout==="return") {
        data.complete="Complete"
        data.checkout="Returning"
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        }else if(list==="pulls" && data.checkout==="return"){
          data.checkout="Returning"
          data.complete="Completed"
         dispatch(createOut(data))
        dispatch(deletePull(data._id)) 
        }
      })
    })

    useEffect(() => {
      tableData.filter((data) => {
        if (list==="cars" && !data.complete && data.vcolor && data.price  ) {  
        data.complete="Complete"
        data.checkout="Paid"
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        } else if (list==="pulls" && !data.complete && data.vcolor && data.price  ) {  
          data.complete="Paid"
          data.checkout="Paid"
          const _id = data._id
       dispatch(updatePull(_id, data))
          }
      })
    })

    const handleUpdate = (e) => {
      const evt = e.target.value
      tableData.filter((data) => {
        if (evt === data._id) {
        dispatch(upForm(data))
      navigate("/1")}
      })}

    const handleComp = (e) => {
      const evt = e.target.value
        tableData.filter((data) => {

        if(evt===data._id && data.checkout==="Returning"){ 
          data.complete="Completed"
          dispatch(deletePull(data._id))      
          dispatch(createOut(data))

          }else if(evt===data._id && data.checkout!=="Returning"){  
           data.complete="Completed"
          dispatch(deletePull(data._id))        
          dispatch(createComp(data))  
          
          }
      })}
      const handleRepark = (e) => {
        const evt = e.target.value
          tableData.filter((data) => {
  
          if(evt===data._id){ 
            data.vcolor=""
            data.complete=""
            data.checkout="repark"
            dispatch(createCar(data))
            dispatch(deletePull(data._id))
            dispatch(deleteComp(data._id))  
            dispatch(deleteOut(data._id))     
            }
        })}

        const handleModal = (e) => {
          setModal(true);
          setPullId(e.target.value)
          const evt = e.target.value
          tableData.filter((data) => {
            if (evt === data._id) {
            dispatch(upForm(data))}
            
          })}

    return (
      <tbody>
        <tr>
          <td>
          <input type="text" placeholder="search..." onChange={(event) => {
         setSearchTerm(event.target.value);}}/>
         </td>
         <td>
             {carlength}&nbsp;cars&nbsp;total
            </td>
            </tr>
            {tableData.filter((data) => {
              console.log(list)
            if (list==="cars" && data.complete) 
            { return !data.complete?.includes("Complete")}
            else if (list==="pulls" && data.complete==="Completed") 
          {return !data.complete?.includes("Completed")}
             else {
            return data
           }
          })
          .filter((data) => {
            if(list==="cars" && data.checkout==="process")
            {return !data.checkout?.includes("process")}
            else if(list!=="cars" && data.checkout==="repark")
            {return !data.checkout?.includes("repark")}
            else {
              return data
             }
          })
        .filter((data) => {
            if (!on && !day) { return data; }
            else if (!on) { return data.type?.includes("on"); }
            else if (!day) { return data.type?.includes("day"); }
          })
            .filter((data) => {
              if (searchTerm === "") {
                return data;
            } else if (data.ticket?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
              else if (data.name?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
              else if (data.room?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
              else if (data.vmake?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
              else if (data.vcolor?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
              else if (data.vmodel?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
            })
            .map((data) => {
              return (
                <tr key={data._id}>

                  <td className="tdbtn">

                    {!data.complete && (
                      <button value={data._id}
                        onClick={handleModal}>Process</button>)}

                    {data.complete && (
                      <button value={data._id}
                        onClick={handleComp}>Completed</button>
                    )}

                    <button type="button" className="" value={data._id} onClick={handleUpdate}>Edit</button>

                    <button type="button" className="" value={data._id} onClick={() => dispatch(deletePull(data._id)) && dispatch(deleteCar(data._id))
                      && dispatch(deleteComp(data._id)) && dispatch(deleteOut(data._id))}>
                      Delete</button>

                      {data.complete && (
                      <button value={data._id}
                        onClick={handleRepark}>Repark</button>
                    )}
                  </td>

                  {columns.map(({ accessor }) => {
                    const tData = data[accessor] ? data[accessor] : "";
                    return <td key={accessor}>{tData}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>    
            );
  };
  
  export default TableBody;