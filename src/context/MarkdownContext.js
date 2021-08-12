import { useState, createContext } from 'react'

export const MarkdownContext = createContext()

export const MarkdownProvider = ({ children }) => {
  const [markedVal, setMarked] = useState('# Hello from React Marked')
  return (
    <MarkdownContext.Provider value={{ markedVal, setMarked }}>
      {children}
    </MarkdownContext.Provider>
  )
}
