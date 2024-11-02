import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var [data,setdata]=useState("")
    var [inp,setinp]=useState(['ICTAK'])
    const Submit =(g) =>{
        setdata(g.target.value)
        console.log(data)
       }
       const add = () => {
        setinp([...inp, data]);
        console.log(inp)
        setdata("");
       }

  return (
    <div>
        <br/>
        <br/>
        <TextField variant='outlined' label="Enter Your Name" onChange={Submit} value={data}></TextField><br/> <br/>
        <Button variant='contained' onClick={add}>Submit</Button>
        <ul>
            {inp.map((v)=>{
                return(
            <li>{v}</li>
                )
})}
        </ul>    
    </div>
  )
}

export default Listmap