import React from "react";
import List from "../List/List"
import { useSelector } from 'react-redux';
import { getCars } from "../../_actions/subCars";

const Request = () => {
    const posts = useSelector( state => state.subCars )
    const x = ""
    return (
       <div className="empty table_container">
            Under Development
       </div>

    )
}
export default Request;