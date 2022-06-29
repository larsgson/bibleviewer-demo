import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import PassagesAutocomplete from './passages-autocomplete'

const CustomAppBar = () =>  (
  <AppBar
    sx={{ background: 'transparent', boxShadow: 'none'}}
  >
    <Toolbar>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <img
            src={process.env.PUBLIC_URL + '/img/JnetLogo.svg'}
            alt=""
            style={{height: 52}} />
        </Grid>
        <Grid item>
          <Typography
           sx={{
               fontFamily: "'Work Sans', sans-serif",
               fontSize: 18,
               textDecoration: 'none',
               width: '100%'
             }}
           color="inherit"
         >
            Jesus.net
          </Typography>
        </Grid>
        <Grid item>
          <PassagesAutocomplete/>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)

export default CustomAppBar
