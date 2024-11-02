import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h5' color='#000000'>Api</Typography>&nbsp; &nbsp;<hr></hr>
                
                <Link to={'/u'}>
                <Button variant='outlined' color='#000000'>User Details</Button>
                </Link>
                <Link to={'/i'}>
                <Button variant='outlined' color='#000000'>User Id</Button>
                </Link>
                <Link to={'/l'}>
                <Button variant='outlined' color='#000000'>Listmap</Button></Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar