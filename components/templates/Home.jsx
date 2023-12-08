/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Suspense, useEffect } from 'react'
import { Covers } from '@components/organisms'
import { HomeSkeleton } from '@components/molecules/skeletons'
import { useVapesContext } from '@contexts/VapesContext'
import { LS_GLOBAL_COUNTERS, LS_VAPES_TO_BOX, getLocalStorage } from '@utils'
import { VerifyAge } from '@components/molecules'

const Home = () => {
  const { setGlobalCounter, setVapesToBox } = useVapesContext()

  useEffect(() => {
    setGlobalCounter(getLocalStorage(LS_GLOBAL_COUNTERS) || [])
    setVapesToBox(getLocalStorage(LS_VAPES_TO_BOX) || [])
  }, [])

  return (
    <Suspense fallback={<HomeSkeleton />}>
      <VerifyAge />
      <Covers />
    </Suspense>
  )
}

export default Home
