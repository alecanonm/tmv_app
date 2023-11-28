'use client'

import { createContext, useContext, useState } from 'react'

const vapesContextDefaultValues = {
  globalCounter: 0,
  setGlobalCounter: () => {},
}

const VapesContext = createContext(vapesContextDefaultValues)

export const useVapesContext = () => useContext(VapesContext)

export const VapesProvider = ({ children }) => {
  const [globalCounter, setGlobalCounter] = useState(0)

  return (
    <VapesContext.Provider value={{ globalCounter, setGlobalCounter }}>
      {children}
    </VapesContext.Provider>
  )
}
