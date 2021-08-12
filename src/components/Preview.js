import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { useStyles } from '../utils/styles'
import { MarkedConverter } from './Marked'

export const Preview = () => {
  const classes = useStyles()
  return (
    <Paper className={`${classes.paper} ${classes.editorHeight}`} elevation={3}>  
        <Typography gutterBottom variant='h4'>
          Preview
        </Typography>
        <Typography gutterBottom component='div'>
          <MarkedConverter />
        </Typography>
    </Paper>
  )
}
