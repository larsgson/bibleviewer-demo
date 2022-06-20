import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import LinearProgress from '@mui/material/LinearProgress'
import BibleReference, { useBibleReference, ReferenceSelector } from "bible-reference-rcl"

const useStyles = makeStyles(theme => ({
  titleBar: {
    alignItems: 'flex-end',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  hiddenBar: {
    alignItems: 'flex-end',
    background: 'rgba(0,0,0,0) 100%',
  },
  subtitle: {
    whiteSpace: 'unset',
    overflow: 'unset',
    paddingBottom: 5,
  },
  title: {
    whiteSpace: 'unset',
    textOverflow: 'clip',
//    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  playPause: {
    color: 'white',
  },
  bar: {
    backgroundColor: 'red',
  },
  linearProgressBar: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  input: {
    color: 'green',
  }
}))

const supportedBooks = [ 'jhn']
const initialBook = "jhn"
const initialChapter = "1"
const initialVerse = "1"

const onChange = (bookId, chapter, verse) => {
  console.log(`\n### Reference changed to ${bookId} - ${chapter}:${verse}\n\n`)
}

const initial =
  {
    initialBook,
    initialChapter,
    initialVerse,
    onChange
  }

const ItemProgressBar = ({classes,value}) => (
  <LinearProgress
    variant="determinate"
    color="secondary"
    sx={{
      backgroundColor: 'rgba(255,255,255,0.2)',
      color: 'red',
    }}
    value={value}/>
)

/*
<BibleReference
  status={state}
  actions={actions}
/>
*/

const ItemBar = ({title, hideTitle, descr, bkgrd, percentVal, onClick}) => {
  const classes = useStyles()
  const useTitle = !hideTitle || (percentVal>0)
  const {state, actions} = useBibleReference(initial)
  useEffect(() => {
    actions.applyBooksFilter(supportedBooks)
  }, [])
  return (
    <ImageListItemBar
      title={useTitle?title:""}
      subtitle={(<div>
                    {percentVal && (<ItemProgressBar classes={classes} value={percentVal}/>)}{descr}
                </div>)}
      sx={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
      classes={{
        root: useTitle?classes.titleBar:classes.hiddenBar,
        title: classes.title,
        subtitle: classes.subtitle,
      }}
    />
  )
}

export default ItemBar
