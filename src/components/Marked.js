import { useState } from 'react'
import marked from 'marked'

export const MarkedConverter = () => {
  const [markedVal, setMarkedVal] = useState(
    '# Welcome to my React Markdown Previewer!'
  )
  return <div dangerouslySetInnerHTML={createMarkUp(markedVal)}></div>
}

export const createMarkUp = (val) => {
  return { __html: marked(val) }
}