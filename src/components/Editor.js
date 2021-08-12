import { useContext } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import { useStyles } from '../utils/styles'
import { MarkdownContext } from '../context/MarkdownContext'

export const Editor = () => {
  const classes = useStyles()
  const { markedVal, handleChange } = useContext(MarkdownContext)

  return (
    <Paper className={`${classes.paper} ${classes.editorHeight}`} elevation={3}>
      <Typography gutterBottom variant='h4'>
        Editor
      </Typography>
      <TextField
        id='editor'
        label='Editor'
        multiline
        rows='100'
        defaultValue={markedVal}
        fullWidth
        onChange={(e) => handleChange(e)}
      />
    </Paper>
  )
}
