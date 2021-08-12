import { useContext } from 'react'
import marked from 'marked'
import { MarkdownContext } from '../context/MarkdownContext'

export const MarkedConverter = () => {
  const { markedVal } = useContext(MarkdownContext)
  // const [markedVal, setMarkedVal] = useState(
  //   '# Welcome to my React Markdown Previewer!'
  // )
  return <div dangerouslySetInnerHTML={createMarkUp(markedVal)}></div>
}

export const createMarkUp = (val) => {
  return { __html: marked(val) }
}
