import { Suspense } from 'react'
import { Covers } from '@components/organisms'
import { HomeSkeleton } from '@components/molecules/skeletons'

const Home = () => {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <Covers />
    </Suspense>
  )
}

export default Home
