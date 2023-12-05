'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { Backdrop } from '@components/atoms'
import { Box } from '@components/molecules'
import { Toast } from 'primereact/toast'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'

const CustomButton = ({ width, height, src, alt, xaxies, yaxies, url }) => {
  const { id: brandId } = useParams()
  const [showModal, setShowModal] = useState(false)
  const { globalQuantity, globalCounter } = useVapesContext()

  const cantVapes =
    globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter || 0

  const show = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'No has alcanzado la cantidad mínima',
      detail: (
        <p>
          Para poder comprar debes alcanzar la cantidad mínima de{' '}
          <strong>{globalQuantity} vapes.</strong>
        </p>
      ),
    })
  }

  const navigateTo = () => {
    url
      ? (window.location.href = url)
      : cantVapes >= globalQuantity
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
      <Toast ref={toast} className='w-[90vw] sm:w-auto' />
    </>
  )
}

export default CustomButton
