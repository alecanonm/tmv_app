'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Backdrop } from '@components/atoms'

const CustomButton = ({ width, height, src, alt, xasies, yaxies, url }) => {
  const [showModal, setShowModal] = useState(false)

  const navigateTo = () => {
    url ? (window.location.href = url) : setShowModal(!showModal)
  }

  return (
    <>
      {' '}
      {showModal && (
        <Backdrop>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-3xl font-bold text-white text-center'>
              Coming soon!
            </h1>
            <button
              className='bg-red-500 text-white rounded-lg p-2'
              onClick={() => setShowModal(!showModal)}
            >
              Close
            </button>
          </div>
        </Backdrop>
      )}
      <div
        role='button'
        className={`fixed max-sm:${xasies} ${
          xasies || 'left-5'
        } ${yaxies} rounded-full`}
        onClick={navigateTo}
      >
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </>
  )
}

export default CustomButton
