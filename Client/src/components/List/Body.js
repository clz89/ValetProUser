import React, {useEffect, useState} from "react"
import { batch, useDispatch, useSelector } from "react-redux";
import { deleteCar, createCar } from "../../_actions/subCars";
import { createPull, deletePull, updatePull } from "../../_actions/pulls";
import { upForm } from "../../_actions/updateForm";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { upReset } from "../../_actions/updateForm";
import { createOut, deleteOut } from "../../_actions/outnr";
import { createComp, deleteComp } from "../../_actions/completed";

const TableBody = ({ list, cars, x, carlength, on, day, setTableData, tableData, columns, setPullId, setModal }) => {

    const post = useSelector( state => state.updateForm )
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate()

    const handleDelete = (Id) => {
      const newList = [...tableData];
      const index = tableData.filter((list) => list._id===Id);
      console.log(Id)
      console.log(index)
      newList.splice(index, 1);

      setTableData(newList)
    }
    

     useEffect(() => {
      tableData.filter((data) => {
        if (!data.complete && data.checkout==="Returning") {
          data.complete="Completed"  
                         
          dispatch(updatePull(data))
        }      
      })
    }) 

    useEffect(() => {
      tableData.filter((data) => {
        if (!data.complete && data.checkout==="Checking Out") {
          data.complete="Completed"                 
          dispatch(updatePull(data))
        }      
      })
    })  
    
    useEffect(() => {
      tableData.filter((data) => {
        if (data.checkout==="checkout") {
          data.checkout="Checking Out"
          data.complete="Completed"
         dispatch(createPull(data))
          dispatch(deleteCar(data._id))  
          handleDelete(data._id)  
        }
     })
     })

    useEffect(() => {
      tableData.filter((data) => {
        if (data.checkout==="return") {
        data.complete="Completed"
        data.checkout="Returning"
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        }
      })
    })

    useEffect(() => {
      tableData.filter((data) => {
        if (!data.complete && data.vcolor && data.price  ) {  
        data.complete="Completed"
        data.checkout="Paid"
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        }
      })
    })
  
    /*
    useEffect(() => {
      tableData.filter((data) => {
        if (pull && !data.complete==="complete" && data.price && data.vcolor) {
         data.complete="Completed"
        dispatch(updatePull(data._id, data))
      }
      })
})
useEffect(() => {
  tableData.filter((data) => {
    if (pull && !data.complete==="complete" && data.checkout) {
     data.checkout="Checking Out"
     data.complete="Completed"
    dispatch(updatePull(data._id, data))  
  }
    
  })
})*/

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
          
          dispatch(deletePull(data._id))      
          dispatch(createOut(data))

          }else if(evt===data._id && data.checkout!=="Returning"){  
           
          dispatch(deletePull(data._id))        
          dispatch(createComp(data))
          
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
            {/*{tableData.filter((data) => {
              console.log(list)
            if (list==="cars" && data.complete) 
            { return !data.complete?.includes("Completed")}
            else if (list==="pulls" && data.return) 
          { return !data.return?.includes("p")}
             else {
            return data
           }
          })*/}
        {tableData.filter((data) => {
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