import { Divider, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
// import './src/Components/Header.css';
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

export default function Header() {
	
    return (
		<>
        <div>
          	<nav class="navigation">
			  <h1> Contact List</h1>
              </nav> 


    <Paper
      component="form"
      sx={{ m: '10px 20px', p: '6px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Contacts"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
    
      </IconButton>
     
    </Paper>
    
    	<br/>
		
        </div>
        </>	
    )

  
}

	