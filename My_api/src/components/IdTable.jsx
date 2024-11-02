import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const IdTable = () => {
    var [user,setuser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        setuser(response.data)
        console.log(user)
        
})
  return (
    <div>
        <br/>
        <br/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>UserId</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        user.map((val)=>{
                            return(
                                <TableRow>
                                    <TableCell>{val.id}</TableCell>
                                    <TableCell>{val.title}</TableCell>
                                </TableRow>
                            )
})
                    }
                
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default IdTable