import "./Table.css"
import data from "./mock-data.json";
import React from "react";



const Table2 = () => {
    
        const DisplayData = data.map(
            (contacts)=>{

             return (
              <tr>
                  <td>{contacts.fullName}</td>
                  <td>{contacts.address}</td>
                  <td>{contacts.phoneNumber}</td>
                  <td>{contacts.email}</td>
              </tr>
              )})
    
    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {DisplayData}
          </tbody>
        </table>
    )}
    


        
export default Table2