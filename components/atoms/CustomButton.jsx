'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Backdrop } from '@components/atoms'
import { Box } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'
import { withToast } from '@hooks'

const CustomButton = ({
  width,
  height,
  src,
  alt,
  xaxies,
  yaxies,
  url,
  showWarning,
}) => {
  const { id: brandId } = useParams()
  const [showModal, setShowModal] = useState(false)
  const { globalQuantity, globalCounter } = useVapesContext()

  const cantVapes =
    globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter || 0

  const navigateTo = () => {
    url
      ? (window.location.href = url)
      : cantVapes >= globalQuantity
        ? setShowModal(!showModal)
        : showWarning(
            'No has alcanzado la cantidad mínima',
            <p>
              Para poder comprar debes alcanzar la cantidad mínima de{' '}
              <strong>{globalQuantity} vapes.</strong>
            </p>,
          )
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

export default withToast(CustomButton)
