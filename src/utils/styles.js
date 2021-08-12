import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
    display:'grid',
    gridAutoFlow: 'column',
    gap: '4',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  editorHeight:{
    height: '100vh'
  },
  previewRoot: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}))
