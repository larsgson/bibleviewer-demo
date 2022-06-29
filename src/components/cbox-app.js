import React, { useState,useEffect } from 'react'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ItemList  from './item-list'
import CBoxAppBar from './cbox-app-bar'
import { gospelOfJohnObj } from '../constants/naviChaptersJohn'
import useMediaPlayer from '../hooks/useMediaPlayer'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
/*
    primary: {
      light: '#ffffff',
      main: '#181818',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ff0000',
    },
  },
*/
});

const defaultBackgroundStyle = {
  height: 'auto',
  minHeight: '100vh',
  background: '#181818'
}

// const versionStr = 'Version 2.20'

/*
const useStyles = makeStyles(theme => ({
  title: {
    cursor: 'pointer',
  },
  smallText: {
    position: 'absolute',
    right: 10,
    top: 70,
    fontSize: 10,
  },
}))
*/

const CboxApp = (props) => {
// translation path - for instance: "/location/data.en.properties"
  const { curPlay } = useMediaPlayer()
  let curObj = gospelOfJohnObj
  return (
    <div style={defaultBackgroundStyle}>
      <ThemeProvider theme={theme}>
        <CBoxAppBar
          onLeftIconButtonClick={(ev,id,value) => handleClickItem(ev)}
          onPlay={(ev,value)=>console.log(value)}
        />
        <ItemList
          curObj={curObj}
          navButton
          onReset={props.onReset}
          curPlay={curPlay}
        />
      </ThemeProvider>
    </div>
  )
}

export default CboxApp
