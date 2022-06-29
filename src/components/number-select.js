import * as React from 'react'
import { useSelect } from '@mui/base'
import { styled } from '@mui/system'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#333333',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color:  'lightgrey',
}))

const NumberSelect = ({prompt,label,start,end,value,onChange,onClose}) => {
  const [hasFocus, setHasFocus] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => setOpen(open || !value), [value])

  const handleClick = (event,val) => {
    onChange && onChange(event,val)
    setOpen(false)
  }
  const handleClose = (event) => {
    setOpen(false)
    onClose && onClose(event)
  }

  const iStart = parseInt(start)
  const iEnd = parseInt(end)
  const len = iEnd+1-iStart
  return (
    <React.Fragment>
      <FormControl
        sx={{ m: 1, minWidth: 75 }}
        onFocus={()=>setHasFocus(true)}
        onBlur={()=>setHasFocus(false)}
        onMouseDown={()=>setOpen(true)}
      >
        <InputLabel id="number-select-label">{label}</InputLabel>
        <Select
          labelId="number-select-label"
          id="number-select"
          size="small"
          value={value?? ""}
          inputProps={{ readOnly: true }}
        >
        {[ ...Array(len).keys() ].map((inx) => (
          <MenuItem key={inx+iStart} value={inx+iStart}>{inx+iStart}</MenuItem>
        ))}
        </Select>
      </FormControl>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography
            sx={{
              paddingLeft: '5px',
              marginBottom: '15px',
              color: 'lightgrey',
              backgroundColor: 'rgba(255,255,255,0.05)'
            }}
            variant="subtitle2"
            component="div">
            {prompt}
          </Typography>
          <Grid container spacing={1}>
            {[ ...Array(len).keys() ].map((inx) => (
              <Grid item key={inx}>
                <Item onClick={(ev) => handleClick(ev,inx+iStart)}>{inx+iStart}</Item>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default NumberSelect
