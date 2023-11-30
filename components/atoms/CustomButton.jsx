'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Backdrop } from '@components/atoms'
import { Box } from '@components/molecules'

const CustomButton = ({ width, height, src, alt, xaxies, yaxies, url }) => {
  const [showModal, setShowModal] = useState(false)

  const navigateTo = () => {
    url ? (window.location.href = url) : setShowModal(!showModal)
  }

  return (
    <>
      {showModal && (
        <Backdrop>
          <Box setShowModal={setShowModal} showModal={showModal} />
        </Backdrop>
      )}
      <div
        role='button'
        className={`fixed max-sm:${xaxies} ${
          xaxies || 'left-5'
        } ${yaxies} rounded-full`}
        onClick={navigateTo}
      >
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </>
  )
}

export default CustomButton
