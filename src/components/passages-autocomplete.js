import React from 'react'
import { loadCSS } from 'fg-loadcss'
import Autocomplete, {createFilterOptions } from '@mui/material/Autocomplete'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import Icon from '@mui/material/Icon'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import PlayArrow from '@mui/icons-material/PlayArrow'
import PassageDialog from './passage-dialog'
import { useTranslation } from 'react-i18next'
import useMediaPlayer from "../hooks/useMediaPlayer"
import useLocalStorage from "../hooks/useLocalStorage"
import { getOutlineOptions } from '../constants/naviChaptersJohn'
import { outlinesOfJohnObj, verseSumCh } from '../constants/naviChaptersJohn'
import { verseSec } from '../constants/TimeCodes'

const filter = createFilterOptions()

const PassagesAutocomplete = (props) => {
  const [value, setValue] = useLocalStorage("curPassageList",[])
  const [open, setOpen] = React.useState(false)
  const [hasFocus, setHasFocus] = React.useState(false)
  const [directPlay, setDirectPlay] = React.useState(false)
  const [dialogTitle, setDialogTitle] = React.useState("")
  const textInput = React.useRef(null)
  const { t } = useTranslation()
  const options = getOutlineOptions(t)
  const {startPlay} = useMediaPlayer()

  React.useEffect(() => {
    // Set the focus initially
    setTimeout(() => {textInput.current.focus()}, 100)
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild,
    )

    return () => {
      node.parentNode.removeChild(node)
    }
  }, [])

  const handlePlay = () => {
//    const sortedPassages = value.sort((a, b) => a.key.localeCompare(b.key))
    if ((startPlay!=null) && (value.length>0)) {
      const curEntry = {...value[0]}
      const tmpSerie = outlinesOfJohnObj(curEntry)
      const tmpEp = tmpSerie.fileList[0]
      const begCh = curEntry.begin.ch
      const begVerseNbr = ((begCh>1)?verseSumCh[begCh-2] : 0) + curEntry.begin.v -1
      const endCh = curEntry.end.ch
      const endVerseNbr = ((endCh>1)?verseSumCh[endCh-2] : 0) + curEntry.end.v
      tmpEp.begTimeSec = verseSec[begVerseNbr]
      tmpEp.endTimeSec = verseSec[endVerseNbr]
      startPlay(0,tmpSerie,tmpEp)
      setValue(value.slice(1,value.length))
    }
  }

  const openDialog = (value) => {
    setDialogTitle(value)
    setDirectPlay((value==null) || (value.length<=0))
    setOpen(true)
  }

  const handleSubmit = (entry) => {
    value.push(entry)
  }

  return (
    <React.Fragment>
      <Autocomplete
        {...props}
        size="small"
        variant="standard"
        multiple
        freeSolo
        limitTags={7}
        value={value}
        onFocus={()=>setHasFocus(true)}
        onBlur={()=>setHasFocus(false)}
        sx={hasFocus ? {
            backgroundColor: '#333333',
            width: 300,
            marginTop: 2,
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
            width: 300,
            marginTop: 2,
            '& .MuiInputBase-input,.MuiButtonBase-root': {
              color: 'lightgrey',
            },
            '& .MuiInputLabel-root': {
              marginLeft: 1,
              color: 'lightgrey',
            }
          }
        }
        onChange={(event, newV) => {
          const latestV = (newV.length > 0) ? newV[newV.length-1] : []
          if (typeof latestV === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => openDialog(latestV))
          } else if (latestV && latestV.inputValue) {
            openDialog(latestV.inputValue)
          } else {
            setValue(newV)
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params)
          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              label: `Add "${params.inputValue}"`,
            })
          }
          return filtered
        }}
        id="free-solo-dialog-demo"
        options={options}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option
          }
          if (option.inputValue) {
            return option.inputValue
          }
          return option.label
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.label}</li>}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Passages"
            inputRef={textInput}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <React.Fragment>
                  <InputAdornment
                    sx={{height: 22}}
                    position="start">
                    <IconButton
                      onClick={() => openDialog("")}
                      sx={{ p: '10px' }}
                      aria-label="menu"
                    >
                      <Badge
                        badgeContent={<Icon
                                        baseClassName="fas"
                                        className="fa-play"
                                        sx={{
                                          color: 'blue',
                                          fontSize: 3,
                                          width: 'unset',
                                          height: 'unset',
                                        }}
                                      />}
                        color="primary"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        sx={{ "& .MuiBadge-badge": {
                              backgroundColor: 'darkgrey',
                              backgroundColorB: 'rgba(0,0,0,0.05)',
                              width: '14px',
                              height: '14px',
                              minWidth: 'unset',
                            }}}
                      >
                        <MenuBookIcon sx={hasFocus?{color: 'white'}:{color: 'lightgrey'}}/>
                      </Badge>
                    </IconButton>
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </React.Fragment>
              ),
              endAdornment: (
                <React.Fragment>
                  {(value.length>0) && (
                    <InputAdornment
                      sx={{height: 22}}
                      position="start"
                    >
                      <Chip
                        label=""
                        size="small"
                        onClick={handlePlay}
                        sx={{
                          backgroundColor: 'darkgrey',
                        }}
                        icon={(
                          <IconButton
                            aria-label="menu"
                          >
                            <PlayArrow sx={{color: 'blue'}}/>
                          </IconButton>
                        )}/>
                    </InputAdornment>
                  )}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              )
            }}
          />
        )}
      />
      <PassageDialog
        title={dialogTitle}
        open={open}
        directPlay={directPlay}
        onSubmit={handleSubmit}
        onClose={()=>setOpen(false)}
      />
    </React.Fragment>
  )
}

export default PassagesAutocomplete
