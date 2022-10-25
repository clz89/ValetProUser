import React from "react";
import List from "../List/List"
import { useSelector } from 'react-redux';
import { getCars } from "../../_actions/subCars";
import SubCar from "../SubCar/SubCar";

const Request = ({setSubCar, subcar}) => {
    const posts = useSelector( state => state.subCars )
    const x = ""
    return (
       <div className="empty table_container">
            Under Development
            {subcar &&(
        <SubCar setSubCar={setSubCar} {...{setSubCar}}/>
       )}
       </div>
      

    )
}
export default Request;