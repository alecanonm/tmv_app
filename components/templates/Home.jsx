'use client'

// import { Suspense } from 'react'
import { Covers } from '@components/organisms'

const Home = () => {
  return (
    <div className=' max-sm:mt-20'>
      {/* <Suspense key={'covers'} fallback={<p>Cargando...</p>}> */}
      <Covers />
      {/* </Suspense> */}
    </div>
  )
}

export default Home
