/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Suspense } from 'react'
import { Covers } from '@components/organisms'
import { HomeSkeleton } from '@components/molecules/skeletons'
import { VerifyAge } from '@components/molecules'
import { useFetchLocalStorage } from '@hooks'

const Home = () => {
  useFetchLocalStorage()

  return (
    <Suspense fallback={<HomeSkeleton />}>
      <VerifyAge />
      <Covers />
    </Suspense>
  )
}

export default Home
