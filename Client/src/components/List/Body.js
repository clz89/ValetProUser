import React, {useEffect, useState} from "react"
import { batch, useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../../_actions/subCars";
import { createPull, deletePull, updatePull } from "../../_actions/pulls";
import { upForm } from "../../_actions/updateForm";
import { Link } from "react-router-dom";
import Button from "./Button";

const TableBody = ({ pulls, cars, list, on, day, setTableData, tableData, columns, setPullId, pullId, setModal}) => {
   
    const [searchTerm, setSearchTerm] = useState("");
    const posts = useSelector( state => state.updateForm )
    
    const dispatch = useDispatch();
    

    useEffect(() => {
      tableData.filter((data) => {
        if (cars && data.checkout ) {
        dispatch(createPull(data))
        dispatch(deleteCar(data._id)) 
        window.location.reload(false)
        }
        
      })
    })
    useEffect(() => {
      tableData.filter((data) => {
        if (cars && data.returning==="return") {
       
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        window.location.reload(false)
        
        console.log(data.returning)
        }
      })
    })

    useEffect(() => {
      tableData.filter((data) => {
        if (cars && data.type.includes("day") && data.vcolor && data.price ) {       
        dispatch(createPull(data))
        dispatch(deleteCar(data._id))
        window.location.reload(false)
        
        }
      })
    })
    useEffect(() => {
      tableData.filter((data) => {
        if (pulls && !data.complete && data.price && data.vcolor) {
         data.complete="complete"
        dispatch(updatePull(data._id, data))
        console.log("success")
        console.log(posts)    
      }
      })
})
useEffect(() => {
  tableData.filter((data) => {
    if (pulls && !data.complete && data.checkout) {
     data.checkout=""
     data.complete="complete"
    dispatch(updatePull(data._id, data))
    console.log("success")
    console.log(posts)    
  }
    
  })
})

    const handleUpdate = (e) => {
      const evt = e.target.value
      tableData.filter((data) => {
        if (evt === data._id) {
        dispatch(upForm(data))}
      })}

      const handlePull = (e) => {
        const evt = e.target.value
        tableData.filter((data) => {
          if (evt === data._id) {
          ;
          dispatch(createPull(data))
          dispatch(deleteCar(data._id))
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
           <td>
           <input type="text" placeholder="search..." onChange={(event)=>{
           setSearchTerm(event.target.value);}}
            />
         </td>
        {tableData.filter((data) => {
             if (!on && !day) 
             {return data}
               else if (!on) 
               {return data.type?.includes("on")}
               else if(!day) 
               {return data.type?.includes("day")}})
          .filter((data) => {
          if (searchTerm === "") {
              return data;
            } else if(data.ticket?.toLowerCase().includes(searchTerm.toLowerCase()))
              {return data}
             
          }).map((data) => {
          return (
            <tr key={data._id}>
              <td>
              {data._id}
              <button value={data._id} className='btn btn-primary btn-md'
        onClick={handleModal}>Open Modal</button>              
        
        <button type="button" value={data._id} onClick={handlePull}>Pull</button>

              <Link to='/'>
             <button type="button" value={data._id} onClick={handleUpdate}>Edit</button>
             </Link>
             <button type="button" value={data._id} onClick={() => dispatch(deletePull(data._id)) && dispatch(deleteCar(data._id)) }>
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