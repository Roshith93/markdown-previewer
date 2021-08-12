import { useContext } from 'react'
import marked from 'marked'
import { MarkdownContext } from '../context/MarkdownContext'
import { useStyles } from '../utils/styles'

export const MarkedConverter = () => {
  const classes = useStyles()
  const { markedVal: val } = useContext(MarkdownContext)
  return (
    <div
      dangerouslySetInnerHTML={createMarkUp(val)}
      className={classes.editorHeight}
      id='preview'
    ></div>
  )
}

export const createMarkUp = (val) => {
  return { __html: marked(val, { breaks: true }) }
}
