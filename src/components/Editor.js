import { useContext } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import { useStyles } from '../utils/styles'
import { MarkdownContext } from '../context/MarkdownContext'

export const Editor = () => {
 const classes = useStyles()
 const { markedVal, handleChange } = useContext(MarkdownContext)

  return <Paper className={classes.paper}>
    <TextField
          id="editor"
          label="Editor"
          multiline
          rows="7"
          defaultValue={markedVal}
          fullWidth
          onChange={(e) => handleChange(e)}
        />
  </Paper>
}
