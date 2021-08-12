import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { useStyles } from '../utils/styles'
import { MarkedConverter } from './Marked'

export const Preview = () => {
  const classes = useStyles()
  return (
    <Card className={classes.previewRoot} variant='outlined' id='preview'>
      <CardContent>
        <Typography gutterBottom component='div'>
          <MarkedConverter/>
        </Typography>
      </CardContent>
    </Card>
  )
}
