import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import AppBar from '@mui/material/AppBar'
import BibleRefAutocomplete from './bible-ref-autocomplete'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { johnVerseList } from '../constants/naviChaptersJohn'

const CBoxAppBar = (props) =>  {
  const { largeScreen } = props
  const [beginVal, setBeginVal] = React.useState(johnVerseList[0])
  const [beginInputVal, setBeginInputVal] = React.useState('')
  const [endVal, setEndVal] = React.useState(johnVerseList[22])
  const [endInputVal, setEndInputVal] = React.useState('')
  return (
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
          <BibleRefAutocomplete
            value={beginVal}
            inputValue={beginInputVal}
            options={johnVerseList}
            label="Begin"
            onLeftIconButtonClick={(ev) => props.onLeftIconButtonClick(ev,"begin",beginVal)}
            onChange={(ev, newValue) => setBeginVal(newValue)}
            onInputChange={(ev, newInputValue) => setBeginInputVal(newInputValue)}
          />
        </Grid>
        <Grid item>
          <BibleRefAutocomplete
            value={endVal}
            inputValue={endInputVal}
            options={johnVerseList}
            label="End"
            onLeftIconButtonClick={(ev) => props.onLeftIconButtonClick(ev,"end",beginVal)}
            onChange={(ev, newValue) => setEndVal(newValue)}
            onInputChange={(ev, newInputValue) => setEndInputVal(newInputValue)}
          />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
  )
}

/*
onClick={(e) => props.onClickMenuBookIcon(e)}

const useStyles = makeStyles(theme => ({
  logo: {
    height: 54,
  },
  logoSmall: {
    paddingTop: 10,
    height: 28,
  },

*/

export default CBoxAppBar
