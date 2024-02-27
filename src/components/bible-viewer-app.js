import React, { useState } from 'react'
import TileItem from './tile-item'
import CustomAppBar from './app-bar'
import { gospelOfJohnObj } from '../constants/naviChaptersJohn'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaPlayer from "../hooks/useMediaPlayer"

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const defaultBackgroundStyle = {
  height: 'auto',
  minHeight: '100vh',
  background: '#181818',
  padding: 0,
  color: 'whitesmoke',
}

const BibleviewerApp = () => {
  const { startPlay } = useMediaPlayer()
  const [showDescr,setShowDescr] = useState(false)
  const handleShowDescr = (ev,val) => {
    ev.stopPropagation()
    setShowDescr(val)
  }
  const curObj = gospelOfJohnObj
  const handlePlay = (ev) => {
    ev.stopPropagation()
    if (startPlay!=null) {
      startPlay(0,curObj)
    }
  }
  const showEpList = curObj.fileList
  return (
    <div style={defaultBackgroundStyle}>
      <ThemeProvider theme={theme}>
        <CustomAppBar/>
        <TileItem
          item={curObj}
          mTop={0}
          expanded={showDescr}
          infoTile={true}
          epList={showEpList}
          onClickPlay={(e) => handlePlay(e)}
          onClickExpand={(e) => handleShowDescr(e,!showDescr)}
        />
      </ThemeProvider>
    </div>
  )
}

export default BibleviewerApp
