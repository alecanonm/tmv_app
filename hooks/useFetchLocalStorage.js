/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import { useVapesContext } from '@contexts/VapesContext'
import { LS_GLOBAL_COUNTERS, LS_VAPES_TO_BOX, getLocalStorage } from '@utils'

const useFetchLocalStorage = () => {
  const { setGlobalCounter, setVapesToBox } = useVapesContext()

  useEffect(() => {
    setGlobalCounter(getLocalStorage(LS_GLOBAL_COUNTERS) || [])
    setVapesToBox(getLocalStorage(LS_VAPES_TO_BOX) || [])
  }, [])
}

export default useFetchLocalStorage
