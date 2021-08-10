import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import { useStyles } from '../utils/styles'

export const Editor = () => {
 const classes = useStyles()
  return <Paper className={classes.paper}>
    <TextField
          id="editor"
          label="Editor"
          multiline
          rows="7"
          defaultValue="Default Value"
          fullWidth
        />
  </Paper>
}
