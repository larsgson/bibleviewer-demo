import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import AppBar from '@mui/material/AppBar'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ItemList  from './item-list'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ChSelList from './ch-sel-list'
import { useTranslation } from 'react-i18next'

const ConfirmationDialogRaw = (props) => {
  const { chList, onClose, open, ...other } = props

  const handleCancel = () => onClose()
  const handleOk = () => onClose()
  const handleReturnClick = (ev) => {
    ev.stopPropagation()
    onClose && onClose()
  }
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': {
          backgroundColor: '#333333',
          margin: 1,
          width: '96%'
        }
      }}
      open={open}
      {...other}
    >
      <DialogContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <IconButton
              sx={{
                color: '#CCCCCC',
                backgroundColor: 'rgba(255,255,255,0.2)'
              }}
              onClick={(e) => handleReturnClick(e)}
              aria-label="Return back">
              <ChevronLeft/>
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          sx={{
            color: '#FFFFFF',
            backgroundColor: 'rgba(255,255,255,0.2)'
          }}
          variant="h5"
          component="h5">
          Chapter
        </Typography>
        <ChSelList
          chList={chList}
          onClick={(ev,ser,ep) => console.log(ep)}/>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmationDialogRaw
