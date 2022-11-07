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
import * as api from '../../_api';

const TableBody = ({windowSize, setFormT, formT, scan, setScan, sorted, setSubCar, list, carlength, on,
   day, posts, setTableData, tableData, columns, columnMobile, setPullId, setModal, vehicle, setVehicle }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

     
  
    useEffect(() => {
      tableData.filter((data) => {
        if (data.type==="ON" && !data.room && !data.hot) {
          data.hot="Hot"
          dispatch(updateCar(data._id, data))
          dispatch(updatePull(data._id, data))
        }      
        else if(data.type==="ON" && data.room && data.hot) {
          data.hot=""
          dispatch(updateCar(data._id, data))
          dispatch(updatePull(data._id, data))
        } 
      })
    }) 

    useEffect(() => {
      tableData.filter((data) => {
        if (list==="cars" && !data.complete && data.payment && data.price  ) {  
        data.complete="Complete"
        data.status="Paid"
        api.createPull(data)
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
       dispatch(upForm(data));
       setSubCar(true);
      }
      })}

    const handleComp = (e) => {
      const evt = e.target.value
        tableData.filter((data) => {

        if(evt===data._id && data.status==="Returning"){ 
          data.complete="Completed"
          dispatch(deletePull(data._id))      
          api.createOut(data)

          }else if(evt===data._id && data.status!=="Returning"){  
           data.complete="Completed"
          dispatch(deletePull(data._id))        
          api.createComp(data) 
          
          }
      })}
      const handleRepark = (e) => {
        const evt = e.target.value
          tableData.filter((data) => {
  
          if(evt===data._id){ 
            data.payment=""
            data.complete=""
            data.status="repark"
            api.createCar(data)
            setTableData([...sorted])

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
                api.createComp(data)
                dispatch(deleteOut(data._id)) }    
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
      <tbody className="datacontainer">
        <tr className="searchtr">
          <td className="tablenav">
          <input type="text" placeholder="search..." onChange={(event) => {
         setSearchTerm(event.target.value);}} value={searchTerm} />
         <button className="but searchbtn" onClick={()=>setSearchTerm("")}>X</button>
         </td>
         <td>
             {carlength}&nbsp;total
            </td>
            <td className="tablenav">
              <button className="butscanadd" onClick={()=>setScan(true)} >Scan</button>
              <button className={formT ? "but btn-flash" : "butscanadd"} onClick={()=>setSubCar(true)} >Add</button>
            </td>
            </tr>
            {tableData.filter((data) => {
            
          
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
              else if (data.vmake?.toLowerCase().includes(searchTerm.toLowerCase()) )  { return data; }          
              else if (data.vmake?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
              else if (data.vcolor?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
              else if (data.vmodel?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
              else if (data.vehicle?.toLowerCase().includes(searchTerm.toLowerCase())) { return data; }
            })
            .map((data) => {
              return (
                <tr  className="bodytr" key={data._id} >
                  {windowSize.innerWidth > "1000" &&(
                  <td className="listbtn">

                    {!data.complete && (
                      <button className="but procbtn" value={data._id}
                        onClick={handleModal}>Process...&nbsp;&nbsp;&nbsp;</button>)}

                    {list==="pulls" && data.complete && !data.hot &&(
                      <button className="but" value={data._id}
                        onClick={handleComp}>Completed</button>
                    )}

                    {list==="pulls" && data.complete && data.hot &&(
                      <button className="but roombtn" value={data._id}
                        onClick={handleModal}>&nbsp;+ Room&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    )}

                    {list==="outs" && (
                      <button className="but" value={data._id}
                        onClick={handleOuts} >Checkout</button>
                    )}

                    <button className="but editbtn" type="button"  value={data._id} onClick={handleUpdate}>Edit</button>
                      {data.complete && (
                      <button className="but parkbtn" value={data._id}
                        onClick={handleRepark}>Repark</button>
                    )}

                    {data.status==="process" && (
                      <button className="but parkbtn" value={data._id}
                        onClick={handleRepark}>Repark</button>
                    )}

                   {/* <button className="but parkbtn" type="button"  value={data._id} onClick={() => dispatch(deletePull(data._id)) && dispatch(deleteCar(data._id))
                      && dispatch(deleteComp(data._id)) && dispatch(deleteOut(data._id))}>
                   Delete</button>*/}
                  </td>)}
                  
                   
                  {columns.map(({ accessor }) => {
                    if(windowSize.innerWidth > "1000"){
                    const tData = data[accessor] ? data[accessor] : "";                 
                    return <td className={data.hot ? "hotlist" : data.complete ? "complist" : data.type==="DAY" ? "daylist" : "deflist" }  
                    key={accessor}>{tData}</td>;}}
                    
                  )}
                    {windowSize.innerWidth < "1000" &&(
                     <div className={data.hot ? "listmobile hotlist" : data.complete ? "listmobile complist" : 
                     data.type==="DAY" ? "listmobile daylist" : "listmobile deflist" } key={data._id}>
                      <div>{data.type} {data.ticket} {data.depart}-</div>
                      <div>{data.name} {data.room} {data.vehicle} {data.vmodel}-</div>
                      <div>{data.price} {data.payment} {data.status} {data.complete}-</div>
                      <div>{data.notes} {data.hot} {data.vip} {data.outfront} {data.pspot} {data.license}-</div>
                      </div>
                      

                    
                    
                  )}
                  {windowSize.innerWidth < "1000" &&(
                  <td className="listbtn">

                    {!data.complete && (
                      <button className="but procbtn" value={data._id}
                        onClick={handleModal}>Process...&nbsp;&nbsp;&nbsp;</button>)}

                    {list==="pulls" && data.complete && !data.hot &&(
                      <button className="but" value={data._id}
                        onClick={handleComp}>Completed</button>
                    )}

                    {list==="pulls" && data.complete && data.hot &&(
                      <button className="but roombtn" value={data._id}
                        onClick={handleModal}>&nbsp;+ Room&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    )}

                    {list==="outs" && (
                      <button className="but" value={data._id}
                        onClick={handleOuts} >Checkout</button>
                    )}

                    <button className="but editbtn" type="button"  value={data._id} onClick={handleUpdate}>Edit</button>
                      {data.complete && (
                      <button className="but parkbtn" value={data._id}
                        onClick={handleRepark}>Repark</button>
                    )}

                    {data.status==="process" && (
                      <button className="but parkbtn" value={data._id}
                        onClick={handleRepark}>Repark</button>
                    )}

                   {/* <button className="but parkbtn" type="button"  value={data._id} onClick={() => dispatch(deletePull(data._id)) && dispatch(deleteCar(data._id))
                      && dispatch(deleteComp(data._id)) && dispatch(deleteOut(data._id))}>
                   Delete</button>*/}
                  </td>)}
                </tr>
              );
            })}
        </tbody>    
            );
  };
  
  export default TableBody;