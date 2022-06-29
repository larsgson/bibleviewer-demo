import React from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Typography from '@mui/material/Typography'
import NumberSelect from './number-select'
import { useTranslation } from 'react-i18next'
import useMediaPlayer from "../hooks/useMediaPlayer"
import { chInBook, versesPerCh } from '../constants/naviChaptersJohn'
import { gospelOfJohnObj, verseSumCh } from '../constants/naviChaptersJohn'
import { verseSec } from '../constants/TimeCodes'

const PassageDialog = (props) => {
  const {open,title,directPlay,onClose} = props
  const [value, setValue] = React.useState(undefined)
  const [begCh,setBegCh] = React.useState(undefined)
  const [begV,setBegV] = React.useState(undefined)
  const [endCh,setEndCh] = React.useState(undefined)
  const [endV,setEndV] = React.useState(undefined)
  const { startPlay } = useMediaPlayer()
  const { t } = useTranslation()

  React.useEffect(() => setValue(title), [title])

  const [dialogValue, setDialogValue] = React.useState({
    dTitle: "",
    begin: {ch: undefined,v: undefined},
    end: {ch: undefined,v: undefined}
  })

  const handleClose = () => {
    setBegCh(undefined)
    setBegV(undefined)
    setEndCh(undefined)
    setEndV(undefined)
    onClose && onClose()
  }

  const handleChange = (event) => {
    setDialogValue({
      ...dialogValue,
      dTitle: event.target.value,
    })
  }

  const handleBegChChange = (ev,val) => {
    setBegCh(val)
    setBegV(undefined)
    setEndCh(val)
    setEndV(versesPerCh[val-1])
  }

  const handleEndChChange = (ev,val) => {
    const newEndCh = (val!==endCh)
    setEndCh(val)
    setEndV(newEndCh ? undefined : versesPerCh[val-1])
  }

  const handleAdd = () => console.log("add")

  const handlePlay = () => {
    if ((startPlay!=null) && (begCh) && (begV)) {
      const tmpEp = gospelOfJohnObj.fileList[begCh-1]
      const beginVerseNbr = ((begCh>1)?verseSumCh[begCh-2] : 0) + begV -1
      tmpEp.begTimeSec = verseSec[beginVerseNbr]
      if ((endCh) && (endV)) {
        const endVerseNbr = ((endCh>1)?verseSumCh[endCh-2] : 0) + endV
        tmpEp.endTimeSec = verseSec[endVerseNbr]
      }
      startPlay(0,gospelOfJohnObj,tmpEp)
    }
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        {!directPlay && (<TextField
          autoFocus
          margin="dense"
          id="name"
          value={value}
          onChange={handleChange}
          label="New passage"
          type="text"
          variant="standard"
        />)}
        <Grid container spacing={1} sx={{paddingTop: '15px'}}>
          <Grid item key="begin">
            <Typography
              sx={{
                paddingLeft: '5px',
                color: '#FFFFFF',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
              variant="subtitle2"
              component="div">
              Begin
            </Typography>
            <Grid container spacing={1} sx={{paddingTop: '15px'}}>
              <Grid item key="begCh">
                <NumberSelect
                  prompt={t("BeginCh")}
                  label={t("Chapter")}
                  start={1}
                  end={chInBook}
                  value={begCh}
                  onChange={(ev,val)=>handleBegChChange(ev,val)}
                />
              </Grid>
              {begCh && (<Grid item key="begV">
                <NumberSelect
                  prompt={t("BeginV")}
                  label={t("Verse")}
                  start={1}
                  end={versesPerCh[begCh-1]}
                  value={begV}
                  onChange={(ev,val)=>setBegV(val)}
                />
              </Grid>)}
            </Grid>
          </Grid>
          <Grid item key="end">
            <Typography
              sx={{
                paddingLeft: '5px',
                color: '#FFFFFF',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
              variant="subtitle2"
              component="div">
              End
            </Typography>
            {begV && (<Grid container spacing={1} sx={{paddingTop: '15px'}}>
              <Grid item key="endCh">
                <NumberSelect
                  prompt={t("EndCh")}
                  label={t("Chapter")}
                  start={begCh??1}
                  end={chInBook}
                  value={endCh}
                  onChange={(ev,val)=>handleEndChChange(ev,val)}
                />
              </Grid>
              {endCh && (<Grid item key="endV">
                <NumberSelect
                  prompt={t("EndV")}
                  label={t("Verse")}
                  start={(endCh==begCh) ? begV : 1}
                  end={versesPerCh[endCh-1]}
                  value={endV}
                  onChange={(ev,val)=>setEndV(val)}
                />
              </Grid>)}
            </Grid>)}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
          {directPlay ? (
            <IconButton
              aria-label="menu"
              sx={{backgroundColor: 'darkgrey'}}
              disabled={!endV}
              onClick={handlePlay}
            >
              <PlayArrow
                sx={{color: 'blue'}}
              />
            </IconButton>
          ) : (<Button disabled={!endV} onClick={handleAdd}>Add</Button>
          )}
      </DialogActions>
    </Dialog>
  )
}

export default PassageDialog
