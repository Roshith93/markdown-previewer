import { useContext } from 'react'
import marked from 'marked'
import { MarkdownContext } from '../context/MarkdownContext'

export const MarkedConverter = () => {
  const { markedVal: val } = useContext(MarkdownContext)
  return <div dangerouslySetInnerHTML={createMarkUp(val)}></div>
}

export const createMarkUp = (val) => {
  return { __html: marked(val) }
}
