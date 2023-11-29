'use client'

import { createContext, useContext, useState } from 'react'

const vapesContextDefaultValues = {
  globalCounter: 0,
  setGlobalCounter: () => {},
  vapesPerBrand: [],
  setVapesPerBrand: () => {},
}

const VapesContext = createContext(vapesContextDefaultValues)

export const useVapesContext = () => useContext(VapesContext)

export const VapesProvider = ({ children }) => {
  const [globalCounter, setGlobalCounter] = useState(0)
  const [vapesPerBrand, setVapesPerBrand] = useState([])

  return (
    <VapesContext.Provider
      value={{
        globalCounter,
        setGlobalCounter,
        vapesPerBrand,
        setVapesPerBrand,
      }}
    >
      {children}
    </VapesContext.Provider>
  )
}
