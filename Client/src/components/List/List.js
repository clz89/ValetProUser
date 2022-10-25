import { useState, useEffect } from "react";

import TableBody from "./Body";
import TableHead from "./Head";
import SubCar from "../SubCar/SubCar";
import  Modal  from "./Modal";
import "./List.css"
import { useDispatch, batch } from 'react-redux';
import { createPull, updatePull } from "../../_actions/pulls";
import { deleteCar } from "../../_actions/subCars";

const List = ({ setSubCar, subcar, PullsM, CarsM,  list, posts, x}) => {

  const dispatch = useDispatch();
 
  useEffect(() => {
  dispatch(x);
  }, [dispatch])
  


const [tableData, setTableData] = useState(posts);
const [on, setOn] = useState(false) ;
const [day, setDay] = useState(false) ;
const [modal, setModal] = useState(false);
const [pullId, setPullId] = useState()
const carlength = posts.length

  useEffect(()=> {
    const jsont = JSON.stringify(posts);
      localStorage.setItem("posts", jsont);
  })
  
  
  useEffect(()=> { 
      setTableData(posts)

 }, [posts] )

 
  const columns = [ 
    { label: "Type:", accessor: "type", sortable: true },
    { label: "Id:", accessor: "_id", sortable: true },
    { label: "Ticket #:", accessor: "ticket", sortable: true },
    { label: "Name:", accessor: "name", sortable: true },
    { label: "Room:", accessor: "room", sortable: true },
    { label: "Departure:", accessor: "depart", sortable: true },
    { label: "Vehicle color:", accessor: "vcolor", sortable: true },
    { label: "Vehicle make:", accessor: "vmake", sortable: true },
    { label: "Vehicle model:", accessor: "vmodel", sortable: true },
    { label: "VIP:", accessor: "vip", sortable: true },
    { label: "Retrieve at:", accessor: "retrieve", sortable: true },
    { label: "OutFront:", accessor: "outfront", sortable: true },
    { label: "Notes:", accessor: "notes", sortable: true },
    { label: "Parking spot:", accessor: "pspot", sortable: true },
    { label: "License plate:", accessor: "license", sortable: true },
    { label: "Hot:", accessor: "hot", sortable: true },
    { label: "Price:", accessor: "price", sortable: true },
    { label: "Payment:", accessor: "payment", sortable: true },
    { label: "Status:", accessor: "status", sortable: true },
    { label: "Completed:", accessor: "complete", sortable: true },
    { label: "Issued:", accessor: "createdAt", sortable: true }

  ];
 
  

    useEffect(()=> {
    

        if(carlength!==undefined){
          const jsont = JSON.stringify(carlength);
          localStorage.setItem("carlength", jsont);}
      })

  return (
    <>
    
      <table className="table_container">
        {subcar &&(<SubCar setSubCar={setSubCar} {...{x, tableData, setTableData, posts, setSubCar}}/>)}
        {modal===true&&(
        <Modal setModal={setModal}  {...{ carlength, setModal, tableData, setPullId, pullId, PullsM, CarsM}}/>)}
        <TableHead {...{on, day, setDay, setOn, columns, tableData, setTableData}} />
        <TableBody  {...{ setSubCar, list, carlength, x, setPullId, setModal, on, day, columns, setTableData, tableData, posts }} />
      
      </table>
      
    </>
  );
};

export default List;