import React, { useState } from 'react'
import TileItem from './tile-item'
import CustomAppBar from './app-bar'
import { gospelOfJohnObj } from '../constants/naviChaptersJohn'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
  const [showDescr,setShowDescr] = useState(false)
  const handleShowDescr = (ev,val) => {
    ev.stopPropagation()
    setShowDescr(val)
  }
  let curObj = gospelOfJohnObj
  const showInfo = (curObj!=null)
  const showItem = showInfo && curObj
  const showEpList = showItem && showItem.fileList
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
          onClickExpand={(e) => handleShowDescr(e,!showDescr)}
        />
      </ThemeProvider>
    </div>
  )
}

export default BibleviewerApp
