import React, { useState,useEffect } from 'react'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ItemList  from './item-list'
import { useTranslation } from 'react-i18next'
import { bcv_parser as BcvParcer } from "bible-passage-reference-parser/js/en_bcv_parser";
import CBoxAppBar from './cbox-app-bar'
import ConfirmationDialogRaw from './confirmation-dialog-raw'
import { gospelOfJohnObj } from '../constants/naviChaptersJohn'
import useMediaPlayer from '../hooks/useMediaPlayer'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const bcv = new BcvParcer();
const translationInfo = bcv.translation_info("");

console.log("---->>>", bcv.parse_with_context("3:16","John").osis());

const theme = createTheme({
  palette: {
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
  const [open, setOpen] = useState(false)
// translation path - for instance: "/location/data.en.properties"
  const { curPlay, startPlay } = useMediaPlayer()
  const { t } = useTranslation()
  const handleClose = () => setOpen(false)
  const handleStartPlay = (inx,curSerie,curEp) => {
    startPlay(inx,curSerie,curEp)
  }
  const handleClickItem = (ev) => {
    ev.stopPropagation()
//    setShowDescr(false)
console.log("click")
    setOpen(true)
  }
  let curObj = gospelOfJohnObj
  return (
    <div style={defaultBackgroundStyle}>
      <ThemeProvider theme={theme}>
        <CBoxAppBar
          onLeftIconButtonClick={(ev,id,value) => handleClickItem(ev)}
        />
        {open && (
          <ConfirmationDialogRaw
            onClose={() => setOpen(false)}
            chList={gospelOfJohnObj.fileList}
            open={open}
          />
        )}
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
