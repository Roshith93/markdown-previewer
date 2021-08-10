import Paper from '@material-ui/core/Paper'
import { useStyles } from '../utils/styles'

export const Preview = () => {
  const classes = useStyles()
  return <Paper className={classes.paper}>Preview</Paper>
}
