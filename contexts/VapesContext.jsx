'use client'

import { createContext, useContext, useState } from 'react'

const vapesContextDefaultValues = {
  globalCounter: [],
  setGlobalCounter: () => {},
  globalQuantity: 0,
  setGlobalQuantity: () => {},
  vapesPerBrand: [],
  setVapesPerBrand: () => {},
  vapesToBox: [],
  setVapesToBox: () => {},
}

const VapesContext = createContext(vapesContextDefaultValues)

export const useVapesContext = () => useContext(VapesContext)

export const VapesProvider = ({ children }) => {
  const [globalCounter, setGlobalCounter] = useState([])
  const [globalQuantity, setGlobalQuantity] = useState(0)
  const [vapesPerBrand, setVapesPerBrand] = useState([])
  const [vapesToBox, setVapesToBox] = useState([])

  return (
    <VapesContext.Provider
      value={{
        globalCounter,
        setGlobalCounter,
        globalQuantity,
        setGlobalQuantity,
        vapesPerBrand,
        setVapesPerBrand,
        vapesToBox,
        setVapesToBox,
      }}
    >
      {children}
    </VapesContext.Provider>
  )
}
