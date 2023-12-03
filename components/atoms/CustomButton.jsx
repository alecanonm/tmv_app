'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { Backdrop } from '@components/atoms'
import { Box } from '@components/molecules'
import { Toast } from 'primereact/toast'

const CustomButton = ({
  width,
  height,
  src,
  alt,
  xaxies,
  yaxies,
  url,
  globalQuantity,
  vapesCounter,
}) => {
  const [showModal, setShowModal] = useState(false)

  const show = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'No has alcanzado la cantidad mínima',
      detail: 'Para poder comprar debes alcanzar la cantidad mínima de vapes',
    })
  }

  const navigateTo = () => {
    url
      ? (window.location.href = url)
      : vapesCounter >= globalQuantity
        ? setShowModal(!showModal)
        : show()
  }

  const toast = useRef(null)

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
      <Toast ref={toast} />
    </>
  )
}

export default CustomButton
