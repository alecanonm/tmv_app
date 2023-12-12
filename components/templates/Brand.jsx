'use client'

import { Suspense } from 'react'
import { BrandVapes } from '@components/organisms'
import { BrandSkeleton } from '@components/molecules/skeletons'
import { useFetchLocalStorage } from '@hooks'

const Brand = () => {
  useFetchLocalStorage()

  return (
    <Suspense fallback={<BrandSkeleton />}>
      <BrandVapes />
    </Suspense>
  )
}

export default Brand
