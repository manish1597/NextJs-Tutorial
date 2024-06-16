'use client'
import React, { useState } from 'react'

const ClientPage = () => {
  const[count,setCount]=useState(0);
  console.log("Client Componet");
  return (
    <div>
        <h1 className='text-7xl font-bold mb-4'> {count} </h1>
        <button className='btn btn-primary' onClick={()=> setCount(count + 1)} >
          Increase
        </button>
        &nbsp;  &nbsp;
        <button className='btn btn-primary' onClick={()=> setCount(0)} >
          Clear
        </button>


    </div>
  )
}

export default ClientPage;