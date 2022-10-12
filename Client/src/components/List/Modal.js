import React from "react"


const Modal = ({setPullId, pullId, setModal, tableData, CarsM}) => {

   return(   <CarsM setPullId={setPullId} {...{pullId, setModal, tableData}}/>  
   )
}

export default Modal;
