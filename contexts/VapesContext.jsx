'use client'

import { createContext, useContext, useState } from 'react'

const vapesContextDefaultValues = {
  globalCounter: 0,
  setGlobalCounter: () => {},
  vapes: [],
}

const VapesContext = createContext(vapesContextDefaultValues)

export const useVapesContext = () => useContext(VapesContext)

export const VapesProvider = ({ children }) => {
  const [globalCounter, setGlobalCounter] = useState(0)
  const [vapes, setVapes] = useState([])

  return (
    <VapesContext.Provider
      value={{ globalCounter, setGlobalCounter, vapes, setVapes }}
    >
      {children}
    </VapesContext.Provider>
  )
}
