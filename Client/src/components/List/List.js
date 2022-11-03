import { useState, useEffect } from "react";

import TableBody from "./Body";
import TableHead from "./Head";
import SubCar from "../SubCar/SubCar";
import  Modal  from "./Modal";
import "./List.css"
import { useDispatch, batch } from 'react-redux';
import { createPull, updatePull } from "../../_actions/pulls";
import { deleteCar } from "../../_actions/subCars";
import Scanner from "../Scanner/Scanner";

const List = ({ formT, scan, setScan, setFormT, setSubCar, subcar, PullsM, CarsM,  list, posts, x}) => {

  const dispatch = useDispatch();
 
  useEffect(() => {
  dispatch(x);
  }, [ dispatch])
  
  const sortedData = posts.sort((a, b) => {
    const dateAInMillis = (new Date(a.createdAt)).getTime();
    const dateBInMillis = (new Date(b.createdAt)).getTime();
    
    return dateBInMillis - dateAInMillis;})

    const json = localStorage.getItem("states2");
  const states = JSON.parse(json);

    const [sortField, setSortField] = useState(states ? states.accessor : "createdAt");
    const [order, setOrder] = useState(states ? states.sortOrder : "desc");
    const [vehicle, setVehicle] = useState({vcolor:"", vmake:""})

    
        const sorted = posts.sort((a, b,) => {
          if (a[sortField] === null) return 1;
          if (b[sortField] === null) return -1;
          if (a[sortField] === null && b[sortField] === null) return 0;
          return (
            a[sortField]?.toString().localeCompare(b[sortField]?.toString(), "en", {
              numeric: true,
            }) * (order === "asc" ? 1 : -1)
          );
        });
        
      
    

const [tableData, setTableData] = useState(sorted ? sorted : posts);
const [on, setOn] = useState(false) ;
const [day, setDay] = useState(false) ;
const [modal, setModal] = useState(false);
const [pullId, setPullId] = useState()
const [carlength, setCarLength] = useState(tableData.length)

useEffect(()=>{
  setCarLength(tableData.length)
}, [tableData])

  useEffect(()=> {
    const jsont = JSON.stringify(posts);
      localStorage.setItem("posts", jsont);
  })
  
  
  useEffect(()=> { 
    const sorted = posts.sort((a, b,) => {
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
        a[sortField]?.toString().localeCompare(b[sortField]?.toString(), "en", {
          numeric: true,
        }) * (order === "asc" ? 1 : -1)
      );
    });
      setTableData(sorted)

 }, [posts] )


 
  const columns = [ 
    { label: "Type:", accessor: "type", sortable: true },
    { label: "Ticket #:", accessor: "ticket", sortable: true },
    { label: "Name:", accessor: "name", sortable: true },
    { label: "Room:", accessor: "room", sortable: true },
    { label: "Departure:", accessor: "depart", sortable: true },
    { label: "Vcolor:", accessor: "vcolor", sortable: true },
    { label: "Vmake:", accessor: "vmake", sortable: true },
    { label: "Vehicle model:", accessor: "vmodel", sortable: true },
    { label: "Vehicle:", accessor: "vehicle", sortable: true },
    { label: "VIP:", accessor: "vip", sortable: true },
    { label: "OutFront:", accessor: "outfront", sortable: true },
    { label: "Notes:", accessor: "notes", sortable: true },
    { label: "Parking spot:", accessor: "pspot", sortable: true },
    { label: "License plate:", accessor: "license", sortable: true },
    { label: "Hot:", accessor: "hot", sortable: true },
    { label: "Price:", accessor: "price", sortable: true },
    { label: "Payment:", accessor: "payment", sortable: true },
    { label: "Status:", accessor: "status", sortable: true },
    { label: "Completed:", accessor: "complete", sortable: true },
    { label: "Issued:", accessor: "createdAt", sortable: true },
    { label: "Id:", accessor: "_id", sortable: true },

  ];
 
  

    useEffect(()=> {
    

        if(carlength!==undefined){
          const jsont = JSON.stringify(carlength);
          localStorage.setItem("carlength", jsont);}
      })

  return (
    <>
    
      <table className="table_container">
      {scan &&(<Scanner setScan={setScan} {...{setSubCar, setScan, }}/>)}
        {subcar &&(<SubCar setSubCar={setSubCar} {...{vehicle, setVehicle, scan, setScan, setFormT, x, list, tableData, setTableData, posts, setSubCar}}/>)}
        {modal===true&&(
        <Modal setModal={setModal}  {...{ carlength, setModal, tableData, setPullId, pullId, PullsM, CarsM}}/>)}
        <TableHead {...{ states, on, day, setDay, setOn, columns, tableData, setTableData}} />
        <TableBody  {...{ vehicle, setVehicle, setFormT, formT, scan, setScan, sorted, setSubCar, list, carlength, x, setPullId, setModal, on, day, columns, setTableData, tableData, posts }} />
      
      </table>
      
    </>
  );
};

export default List;