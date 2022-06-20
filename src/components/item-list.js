import React, {useState} from 'react'
import makeStyles from '@mui/styles/makeStyles'
import {styled} from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import TileItem from './tile-item'
import {arrayInsert} from '../utils/obj-functions'
import useBrowserData from '../hooks/useBrowserData'
import useMediaPlayer from "../hooks/useMediaPlayer"

const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#181818',
    position: 'absolute',
    top:0
  },
  rootSingle: {
    maxWidth: 500,
    minWidth: '94%',
    flexWrap: 'wrap',
    minHeight: '90vh',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#181818',
    position: 'absolute',
    top:0
  },
  cardContent: {
    backgroundColor: '#181818',
    overflow: 'hidden',
  },
  cardContentMulti: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 0,
    width: '100%',
  },
  headline: {
    paddingTop: 15,
    fontWeight: 600,
    color: 'whitesmoke',
  },
  areaHeadline: {
    paddingTop: 10,
    fontWeight: 600,
    color: 'whitesmoke',
    width: '100%',
  },
  iconButton: {
    color: 'white',
  },
  floatingButton: {
    margin: 0,
    color: 'white',
    left: '75%',
    top: 'auto',
    right: 'auto',
    zIndex: 100,
    position: 'relative',
  },
  image: {
//    height: '100%',
    width: '100%',
    float: 'left',
  },
  ImageListMulti: {
  },
  ImageList: {
    overflowY: 'hidden',
    // Promote the list into its own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  showTileRoot: {
//    height: '100%',
    height: 'auto !important',
    backgroundColor: 'red',
  },
  infoTileRoot: {
    height: 'auto !important',
  },
  tileRoot: {
    minWidth: 300,
    height: 'auto !important',
    padding: '5px !important',
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderColor: '#99fbfd',
  },
  tileRootSingle: {
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderColor: '#99fbfd',
  },
  tileRootSmall: {
    minWidth: 250,
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderColor: '#99fbfd',
  },
  tileRootSmallSingle: {
    minWidth: 250,
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderColor: '#99fbfd',
  },
  tileRootYellow: {
    height: 'auto !important',
    padding: '5px !important',
    backgroundColor: 'yellow',
  },
  tileRootYellowSmall: {
    padding: '5px !important',
    backgroundColor: 'yellow',
  },
  tileRootRed: {
    height: 'auto !important',
    padding: '5px !important',
    backgroundColor: 'red',
  },
  tileRootRedSmall: {
    padding: '5px !important',
    backgroundColor: 'red',
  },
}))

const options = ['1', '2', '3', '4']

const ItemList = (props) => {
  const { curObj, title, navButton, multiRow, InfoClick } = props
  const [expanded,setExpanded] = useState(false)
  const [showInfoInx,setShowInfoInx] = useState(undefined)
  const [showDescr,setShowDescr] = useState(false)
  const [value, setValue] = React.useState(options[0])
  const [open, setOpen] = React.useState(false)
  const {size,width,height} = useBrowserData()
  const {startPlay,curPlay} = useMediaPlayer()
  const classes = useStyles()
  const handleSetInx = (epInx) => {
    const doEnable = epInx!==showInfoInx
    onInfoClick && (epInx!=null) && onInfoClick(true)
    setShowInfoInx(doEnable ? epInx : undefined)
  }
  const handleClickListItem = () => setOpen(true)
  const handleClose = (newValue) => {
    setOpen(false)
    if (newValue) {
      setValue(newValue)
    }
  }
  const sizeToCol = {"xl": 5, "lg": 4, "md": 3}
  let colSize = sizeToCol[size] || 2
  let curHeight = height-150
  const mTop = 0
  if (width<=380){
    colSize = 1
    if (curHeight>300){
      curHeight = 300
    }
  }
  const nbrOfEntries = 1
  const maxEntries = (navButton && !expanded) ? colSize : nbrOfEntries
  const showNav = navButton && (nbrOfEntries > colSize)
  const showNavButton = showNav && !expanded
//  const useColSize = colSize + (showNavButton ? 0.15 : 0.1)
  const useColSize = (maxEntries > colSize) ? colSize : maxEntries //+ (showNavButton ? 0.15 : 0.1)
  const showMulti = multiRow && expanded
  const expandIcon = expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>
  const toggleExpand = (ev) => {
    ev.stopPropagation()
    setExpanded(!expanded)
  }
  const handleClickItem = (ev,id,inx) => {
    ev.stopPropagation()
//    setShowDescr(false)
console.log(id)
    if (id==="info") {
      handleSetInx(inx)
    } else if (id==="sel") {
      setOpen(true)
    }
  }
/*
  const handleClickItem = (ev,item) => {
    ev.stopPropagation()
    if (startPlay!=null) {
      startPlay(undefined,item,undefined)
    }
  }
  */
  const handleCloseDetails = (ev) => {
    ev.stopPropagation()
    setShowDescr(true)
    onInfoClick && onInfoClick(false)
    handleSetInx(undefined)
  }
  const handlePlay = (ev,item) => {
    ev.stopPropagation()
    startPlay(undefined,item)
  }
  const handleMenuBookIcon = (ev,item) => {
    ev.stopPropagation()
    console.log(item)
  }
  const handleShowDescr = (ev,val) => {
    ev.stopPropagation()
    setShowDescr(val)
  }

  let tmpPlaySer = curPlay && curPlay.curSerie
  const showInfo = (curObj!=null)
  const showItem = showInfo && curObj
  const showEpList = showItem && showItem.fileList
  const singleItem = true
  return (
    <div
      className={(singleItem && (width<=768)) ? classes.rootSingle : classes.root}
      data-disabled={false}//curEditModeInx!=null
    >
    <CardContent
      className={(showMulti && !navButton) ? classes.cardContentMulti : classes.cardContent}
      sx={{padding: 0, color: 'whitesmoke'}} >
      {(title && <Typography variant="h1" component="h2">
        {title} {showNav && (<IconButton
        className={classes.iconButton}
        onClick={(ev) => toggleExpand(ev)}
        size="small">{expandIcon}</IconButton>)}
      </Typography>)}
      {showInfo && (<TileItem
        item={showItem}
        inx={showInfoInx}
        mTop={mTop}
        expanded={showDescr}
        infoTile={showInfo}
        epList={showEpList}
        onClick={(e) => handleClickItem(e,showInfoInx)}
        onClickClose={(e) => handleCloseDetails(e)}
        onClickMenuBookIcon={(e) => props.onClickMenuBookIcon(e)}
        onClickPlay={(e) => handlePlay(e,showItem)}
        onClickExpand={(e) => handleShowDescr(e,!showDescr)}
      />)}
    </CardContent>
  </div>
  )
}

export default ItemList
