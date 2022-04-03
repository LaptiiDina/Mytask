import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function BasicTextFields({label}:{label:string}) {
  return (
    <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
           
            <TextField fullWidth id="fullWidth" label={label} variant="standard" />
          </Box>
   
  
  );
}
