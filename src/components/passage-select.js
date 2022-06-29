import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import NumberSelect from './number-select'

const PassageSelect = ({label}) => {
  const [chapter,setChapter] = React.useState(undefined)
  const [verse,setVerse] = React.useState(undefined)
  return (
    <Box>
      <Typography
        sx={{
          paddingLeft: '5px',
          color: '#FFFFFF',
          backgroundColor: 'rgba(255,255,255,0.1)'
        }}
        variant="subtitle2"
        component="div">
        {label}
      </Typography>
      <Stack direction="row" spacing={2}>
        <NumberSelect open={true} label="Chapter" start={1} end={21} onChange={(ev,val)=>setChapter(val)}/>
        <NumberSelect label="Verse" start={5} end={23} onChange={(ev,val)=>console.log(val)}/>
      </Stack>
    </Box>
  )
}

export default PassageSelect
