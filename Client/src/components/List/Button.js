import React from "react"

const Button = ({setModal}) => {
    return (
        <button className='btn btn-primary btn-md'
        onClick={()=>setModal(true)}>Open Modal</button>
        )
}

export default Button;