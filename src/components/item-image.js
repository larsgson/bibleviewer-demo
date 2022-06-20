import React from "react"
import LazyLoad from 'react-lazyload'
import { getImgOfObj } from '../utils/obj-functions'
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  filler: {
    height: '100%',
    width: '100%',
  },
}))

const ItemImage = (props) => {
  const {item,curEp,onClick,mTop} = props
  const classes = useStyles(props)
  const { t } = useTranslation()
  let useImage = getImgOfObj(item,t)
  if (curEp && curEp.image) useImage = getImgOfObj(curEp,t)
  return (
    <LazyLoad height={props.height}>
      <div
        onClick={(ev) => onClick(ev)}
        style={(true) ? {cursor: "default"} : null}
      >
        <img
          src={useImage}
          alt={item.title}
          style={{
            width: props.width,
            height: props.height,
            float: props.float,
            marginTop: mTop
          }}
        />
        <div className={classes.filler}/>
      </div>
    </LazyLoad>
  )
}

export default ItemImage
