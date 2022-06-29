import React, {useState} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import CardContent from '@mui/material/CardContent'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import { getImgOfObj } from '../utils/obj-functions'
import ItemBarEpisode from './item-bar-episode'
import useBrowserData from '../hooks/useBrowserData'
import useMediaPlayer from "../hooks/useMediaPlayer"
import { useTranslation } from 'react-i18next'
import { verseSec } from '../constants/TimeCodes'
import { verseSumCh } from '../constants/naviChaptersJohn'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 768,
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#181818',
    paddingTop: 70,
  },
  cardContent: {
    backgroundColor: '#181818',
    overflow: 'hidden',
    padding: 0,
    width: '100%',
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
    color: 'rgba(255, 255, 255, 0.87)',
  },
  areaHeadline: {
    paddingTop: 20,
    paddingLeft: 10,
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.87)',
    width: '100%',
  },
  iconHeadline: {
    paddingLeft: 10,
    fontWeight: 600,
    width: '100%',
  },
  iconButton: {
    color: 'white',
  },
  floatingButton: {
    margin: 0,
    color: 'white',
    backgroundColor: 'black',
    bottom: 20,
    left: '85%',
    top: 'auto',
    right: 'auto',
    zIndex: 100,
    position: 'relative',
  },
  ImageListMulti: {
  },
  ImageList: {
    flexWrap: 'nowrap',
    overflow: 'hidden',
    overflowY: 'hidden',
    // Promote the list into its own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  ImageListScroll: {
    flexWrap: 'nowrap',
    overflow: 'scroll',
    overflowY: 'hidden',
    // Promote the list into its own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  image: {
  },
  imageIcon: {
    top: 0,
    width: 'auto',
    height: 50,
    maxHeight: 50,
  },
  imageLessSize: {
    height: '30%',
    width: '20%',
    top: '15%',
  },
  showTileRoot: {
    height: '100%',
    backgroundColor: 'red',
  },
  infoTileRoot: {
    height: '100%',
  },
  tileRoot: {
    height: 'auto !important',
  },
  tileRootSmall: {
  },
  tileRootRed: {
    backgroundColor: 'red',
    height: 'auto !important',
  },
  tileRootRedSmall: {
    backgroundColor: 'red',
  },
}))

const EpList = (props) => {
  const { fullList, title, serie, navButton, useIcon, multiRow,
          epList, imgSrc } = props
  const [expanded,setExpanded] = useState(!navButton)
  const {size, width, height} = useBrowserData()
  const { t } = useTranslation()
  const { startPlay } = useMediaPlayer()
  const classes = useStyles()
  let curTitleList = []
  let tmpPlaySer = undefined
  const sizeToCol = {"xl": 5, "lg": 4, "md": 3}
  let colSize = sizeToCol[size] || 2
  let curHeight = height-150
  if (width<=380){
    colSize = 1
    if (curHeight>300){
      curHeight = 300
    }
  }
  const nbrOfEntries = epList && epList.length
  const showNav = navButton && (nbrOfEntries > colSize)
  const showNavButton = showNav && !expanded
  const useColSize = colSize // + (showNavButton ? 0.15 : 0.1)
  const showMulti = multiRow && expanded
  const expandIcon = expanded ? <RemoveIcon/> : <AddIcon/>
  const toggleExpand = (ev) => {
    ev.stopPropagation()
    setExpanded(!expanded)
  }
  const handleClickItemIndex = (ev,item,ep) => {
    ev.stopPropagation()
    if (startPlay!=null) {
      ep.begTimeSec = verseSec[((ep.id>0)?verseSumCh[ep.id-1] : 0)]
      ep.endTimeSec = verseSec[verseSumCh[ep.id]]
      startPlay(0,item,ep)
    }
  }
  const iconList = serie.iconList
  return (
    <CardContent
      className={(showMulti && !navButton) ? classes.cardContentMulti : classes.cardContent}
      sx={{padding: 0}}
    >
      {title && (<Typography className={classes.areaHeadline} variant="h1" component="h2">
        {title} {showNav && (<IconButton
        className={classes.iconButton}
        onClick={(ev) => toggleExpand(ev)}
        size="large">{expandIcon}</IconButton>)}
      </Typography>)}
      <ImageList
        className={multiRow ? classes.ImageListMulti : showNavButton ? classes.ImageList : classes.ImageListScroll}
        cellheight={iconList? 40 : undefined}
        cols={useColSize}
      >
        {epList.map((ep,inx) => {
          const isIconImage = ep.image && ep.image.origin==="icon"
          const useImg = ep.image ? getImgOfObj(ep,t) : imgSrc
          const tileRootClass = (ep===tmpPlaySer) ? classes.tileRootRed : classes.tileRoot
          const tileRootClassSmall = (ep===tmpPlaySer) ?
                                        classes.tileRootRedSmall : classes.tileRootSmall
          return (
            <ImageListItem
              key={ep.id}
              cols={1}
              rows={1}
              className={(width>=480) ? tileRootClass : tileRootClassSmall}
              onClick={(ev) => handleClickItemIndex(ev,serie,ep)}
            >
              {isIconImage ? (
                <Typography className={classes.iconHeadline}>{t(ep.title)}</Typography>
              ):(
                <img
                  className={classes.image}
                  src={useImg}
                  alt={ep.title}
                  onClick={(ev) => handleClickItemIndex(ev,serie,ep)}
                />
              )}
              {!isIconImage && (<ItemBarEpisode
                serie={serie}
                episode={ep}
                useIcon={useIcon}
                title={t(ep.title)}
                onClick={(ev) => handleClickItemIndex(ev,serie,ep)}/>)}
              {(width<480) && false && (
                <Typography className={classes.iconHeadline}>{t(ep.descr)}</Typography>)}
            </ImageListItem>
          )}
        )}
      </ImageList>
      {showNavButton && (<Fab
        className={classes.floatingButton}
        onClick={(ev) => toggleExpand(ev)}>{expandIcon}</Fab>)}
    </CardContent>
  );
}

export default EpList
