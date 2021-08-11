import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
    display:'grid',
    gridAutoFlow: 'column',
    gap: '4',
    alignContent: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  editor:{

  },
  preview:{

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
