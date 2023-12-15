'use client'

import { useEffect } from 'react'

const Backdrop = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  return (
    <div className='fixed flex items-center justify-center bg-[#000000b0] h-full top-0 w-full z-50 backdrop-blur-sm'>
      <section className='bg-white p-5 overflow-y-auto max-h-[80vh] rounded-lg flex flex-col justify-center w-modal'>
        {children}
      </section>
    </div>
  )
}

export default Backdrop
