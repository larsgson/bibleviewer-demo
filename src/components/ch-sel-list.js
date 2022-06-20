import React, {useState} from 'react'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import { getImgOfObj } from '../utils/obj-functions'
import ItemBarEpisode from './item-bar-episode'
import { useTranslation } from 'react-i18next'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#333333',
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'center',
  color:  '#FFFFFF',
}))

const ChSelList = (props) => {
  const { chList } = props
  const nbrOfEntries = chList && chList.length
  const handleClickItemIndex = (ev,item,ep) => {
    ev.stopPropagation()
  }
  return (
    <CardContent
      sx={{
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 1
      }}
    >
      <Grid container spacing={1}>
        {chList && chList.map((ep,inx) => (
          <Grid item key={inx}>
            <Item>{inx+1}</Item>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  )
}

export default ChSelList
