import React from 'react'
import  TextField  from '@mui/material/TextField';
import { useState } from 'react';

function Search(props) {

    const [ search, setSearch ] = useState ("")

    const handleChange = (event) => {
        setSearch(event.target.value)

        props.searchMedicxs(event.target.value)
    }

  return (
    <div>

    <TextField label="Buscar por especialidad" type="text" name="search" value={search} onChange={handleChange} ></TextField>
    </div>
  )
}

export default Search