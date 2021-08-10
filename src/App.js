import Grid from '@material-ui/core/Grid'
import { Editor } from './components/Editor'
import { Preview } from './components/Preview'
import { useStyles } from './utils/styles'

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Editor />
        </Grid>
        <Grid item xs={12}>
          <Preview />
        </Grid>
      </Grid>
    </div>
  )
}
