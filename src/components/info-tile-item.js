import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { spacing } from '@mui/system'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import LeftIcon from '@mui/icons-material/KeyboardBackspace'
import IconButton from '@mui/material/IconButton'
import ItemImage from './item-image'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  iconButton: {
  },
  actionButton: {
    color: 'white',
    backgroundColor: 'darkgrey',
  },
  buttonPlay: {
    margin: 20,
    zIndex: 100,
  },
  infoImage: {
    height: 230,
    float: 'right',
  },
  infoTileContent: {
    position: 'relative',
    width: '100%',
  },
  infoTileLeft: {
  },
}))

const NewlineText = ({text}) => text.split('\n').map((line,i) => (
  <span key={i}>
    {line}
    <br/>
  </span>
))

const InfoTileItem = ({item,curEp,expanded,mTop,onClickClose,
                        onClickMenuBookIcon,onClickPlay,onClickExpand}) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const expandIcon = expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>
  return (
    <div>
      <ItemImage
        item={item}
        curEp={curEp}
        onClick={(e) => onClickPlay(e)}
        width={"100%"}
        float={"left"}
        mTop={mTop}
      />
      <div className={classes.infoTileContent}>
        <div className={classes.infoTileLeft}>
          <Typography sx={{pt: 1.5,fontWeight: 600,fontSize: '110%',width: '100%'}}>{t(item.title)}</Typography>
          {(item && item.fileList && item.fileList.length>1) && (<IconButton
            sx={{color: 'white',backgroundColor: 'darkgrey',float:'right'}}
            onClick={(e) => onClickExpand(e)}
            size="large">
              {expandIcon}
          </IconButton>)}
          {expanded && <Typography sx={{pt: 0.5,fontWeight: 100,fontSize: '85%',width: '100%'}}><NewlineText text={t(item.description)}/></Typography>}
          {curEp && <Typography sx={{pt: 1,fontWeight: 600,fontSize: '90%',width: '100%'}}>{t(curEp.title)}</Typography>}
          {curEp && curEp.descr && <Typography sx={{pt: 0.5,fontWeight: 100,fontSize: '85%',width: '100%'}}><NewlineText text={t(curEp.descr)}/></Typography>}
          <Fab
            sx={{color: 'darkblue',backgroundColor: 'darkgrey'}}
            onClick={(e) => onClickPlay(e)}
          >
            <PlayArrow/>
          </Fab>
          {item && (<Fab
            onClick={(e) => onClickMenuBookIcon(e)}
            sx={{color: 'darkblue',backgroundColor: 'darkgrey'}}
            aria-label="MenuBookIcon"
            className={classes.actionButton}
          >
            <MenuBookIcon/>
          </Fab>)}
          <div className={classes.filler}/>
        </div>
      </div>
    </div>
  );
}

export default InfoTileItem
