import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import ReactDOM from 'react-dom';

import { useStyles } from '../utils/styles'
import {MarkedConverter} from './Marked'
// import {createMarkUp} from './Marked'

export const Preview = () => {
  const classes = useStyles()
  return (
    <Card className={classes.previewRoot} variant="outlined" id="preview">
      <CardContent>
          {/* <div dangerouslySetInnerHTML ={createMarkUp()}/> */}
          <MarkedConverter/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Preview
        </Typography>
        <Typography variant="h5" component="h2">
          he
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
