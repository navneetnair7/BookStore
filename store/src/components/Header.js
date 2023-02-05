import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book';
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx = {{ backgroundColor: '#33056b'}}position='sticky'>
            <Toolbar>
                <NavLink to="/" style={{color: "white"}}> 
                    <Typography><BookIcon /></Typography>
                </NavLink>
                <Tabs sx = {{ml: 'auto'}} textColor='inherit' indicatorColor= 'primary' value = {value} onChange = {(e, val) => setValue(val)}>
                    <Tab LinkComponent={NavLink} to='/add' label = 'Add book' />
                    <Tab LinkComponent={NavLink} to='/about'label = 'About Us' />
                    <Tab LinkComponent={NavLink} to='/books' label = 'Books' />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header