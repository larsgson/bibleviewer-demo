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
    sx={{
      width: 120,
      '& .Mui-focused': {
        color: 'white',
      }
    }}
    onChange={(ev, newValue) => props.onChange(ev,newValue)}
    onInputChange={(ev, newInputValue) => props.onInputChange(newInputValue)}
    inputValue={props.inputValue}
    id="controllable-states-demo"
    options={props.options}
    renderInput={(params) => (
      <TextField
        {...params}
        label={props.label}
        id="bible-ref-autocomplete"
        size="small"
        variant="standard"
        onFocus={()=>setHasFocus(true)}
        onBlur={()=>setHasFocus(false)}
        sx={hasFocus ? {
            backgroundColor: '#333333',
            m: 1,
            '& .MuiInputLabel-root.Mui-focused': {
              marginLeft: 1,
              color: 'lightgrey',
            }
          } : {
            backgroundColor: 'rgba(0,0,0,0.3)',
            m: 1,
            '& .MuiInputLabel-root': {
              marginLeft: 1,
              color: 'lightgrey',
            }
          }
        }
        onChange={(e)=>console.log(e)}
        InputProps={{
          startAdornment: (<InputAdornment position="start">
            <IconButton
              sx={{ p: '10px' }}
              aria-label="menu"
            >
             <MenuBookIcon sx={hasFocus ? {color: 'white'} : {color: 'lightgrey'}}/>
            </IconButton>
          </InputAdornment>)
        }}
      />
    )}
  />
)}

export default BibleRefAutocomplete
