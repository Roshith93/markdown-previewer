import { useState, createContext } from 'react'

export const MarkdownContext = createContext()

export const MarkdownProvider = ({ children }) => {
  const [markedVal, setMarkedVal] = useState('# Hello from React Marked')
  const handleChange = (e) => {
    setMarkedVal(e.target.value)
  }
  return (
    <MarkdownContext.Provider value={{ markedVal, setMarkedVal, handleChange }}>
      {children}
    </MarkdownContext.Provider>
  )
}
