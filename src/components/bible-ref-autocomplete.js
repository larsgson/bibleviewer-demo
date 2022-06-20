import React from 'react'
import IconButton from '@mui/material/IconButton'
import Autocomplete from '@mui/material/Autocomplete'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import DirectionsIcon from '@mui/icons-material/Directions'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

const BibleRefAutocomplete = (props) => {
  const { value: valueProp, open, ...other } = props
  const [hasFocus, setHasFocus] = React.useState(false)
  const { t } = useTranslation()
  return (
  <Autocomplete
    value={props.value}
    size="small"
    variant="standard"
    onFocus={()=>setHasFocus(true)}
    onBlur={()=>setHasFocus(false)}
    sx={hasFocus ? {
        backgroundColor: '#333333',
        width: 220,
        '& .Mui-focused,.MuiButtonBase-root': {
          color: 'white',
        },
        '& .MuiInputLabel-root': {
          backgroundColor: '#333333',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          marginLeft: 1,
          color: 'white',
        }
      } : {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: 220,
        '& .MuiInputBase-input,.MuiButtonBase-root': {
          color: 'lightgrey',
        },
        '& .MuiInputLabel-root': {
          marginLeft: 1,
          color: 'lightgrey',
        }
      }
    }
    onChange={(ev, newValue) => props.onChange(ev,newValue)}
    onInputChange={(ev, newInputValue) => props.onInputChange(ev,newInputValue)}
    inputValue={props.inputValue}
    id="bible-ref-autocomplete"
    options={props.options}
    renderInput={(params) => (
      <TextField
        {...params}
        label={props.label}
        InputProps={{
          ...params.InputProps,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                onClick={(ev) => props.onLeftIconButtonClick(ev)}
                sx={{ p: '10px' }}
                aria-label="menu"
              >
                <MenuBookIcon sx={hasFocus ? {color: 'white'} : {color: 'lightgrey'}}/>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    )}
  />
)}

export default BibleRefAutocomplete
