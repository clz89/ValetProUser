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
        if (!data.complete && data.status==="Returning") {
          data.complete="Complete"
          dispatch(updatePull(data._id, data))
        }      
      })
    }) 
  
    useEffect(() => {
      tableData.filter((data) => {
        if (!data.complete && data.status==="Checking Out") {
          data.complete="Complete"                 
          dispatch(updatePull(data._id, data))
        }      
      })
    }) 

    useEffect(() => {
      tableData.filter((data) => {
        if (list==="cars" && data.status==="checkout") {
          data.status="Checking Out"
          data.complete="Complete"
          dispatch(deleteCar(data._id))  
         dispatch(createPull(data))
        }else if(list==="pulls" && data.status==="checkout"){
          data.status="Checking Out"
          data.complete="Completed"
         dispatch(createComp(data))
        dispatch(deletePull(data._id)) 
        }
     })
     })

    useEffect(() => {
      tableData.filter((data) => {
        if (list==="cars" && data.status==="return") {
        data.complete="Complete"
        data.status="Returning"
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        }else if(list==="pulls" && data.status==="return"){
          data.status="Returning"
          data.complete="Completed"
         dispatch(createOut(data))
        dispatch(deletePull(data._id)) 
        }
      })
    })

    useEffect(() => {
      tableData.filter((data) => {
        if (list==="cars" && !data.complete && data.payment && data.price  ) {  
        data.complete="Complete"
        data.status="Paid"
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        } else if (list==="pulls" && !data.complete && data.payment && data.price  ) {  
          data.complete="Paid"
          data.status="Paid"
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

        if(evt===data._id && data.status==="Returning"){ 
          data.complete="Completed"
          dispatch(deletePull(data._id))      
          dispatch(createOut(data))

          }else if(evt===data._id && data.status!=="Returning"){  
           data.complete="Completed"
          dispatch(deletePull(data._id))        
          dispatch(createComp(data))  
          
          }
      })}
      const handleRepark = (e) => {
        const evt = e.target.value
          tableData.filter((data) => {
  
          if(evt===data._id){ 
            data.payment=""
            data.complete=""
            data.status="repark"
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

          const handleOuts = (e) => {
            const evt = e.target.value
              tableData.filter((data) => {
              if(evt===data._id){ 
                data.status="Checking Out"
                dispatch(deleteOut(data._id))      
                dispatch(createComp(data))} 
              })}

        /* mass delete if needed  
            useEffect(()=>{
            tableData.map((data) => {
            dispatch(deletePull(data._id))  
            dispatch(deleteCar(data._id))
            dispatch(deleteComp(data._id)) 
            dispatch(deleteOut(data._id))
          })})*/

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
          else if (list==="outs" && data.status==="Checking Out") 
          {return !data.status?.includes("Checking Out")}
             else {
            return data
           }
          })
          .filter((data) => {
            if(list==="cars" && data.status==="process")
            {return !data.status?.includes("process")}
            else if(list!=="cars" && data.status==="repark")
            {return !data.status?.includes("repark")}
            else {
              return data
             }
          })
        .filter((data) => {
            if (!on && !day) { return data; }
            else if (!on) { return data.type?.includes("ON"); }
            else if (!day) { return data.type?.includes("DAY"); }
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

                    {list==="pulls" && data.complete &&(
                      <button value={data._id}
                        onClick={handleComp}>Completed</button>
                    )}
                    {list==="outs" && (
                      <button value={data._id}
                        onClick={handleOuts} >Checkout</button>
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