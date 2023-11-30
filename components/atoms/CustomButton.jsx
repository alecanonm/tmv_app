'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Backdrop } from '@components/atoms'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { OrderTable } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'

const CustomButton = ({ width, height, src, alt, xaxies, yaxies, url }) => {
  const [showModal, setShowModal] = useState(false)
  const { id: brandId } = useParams()
  const { globalCounter } = useVapesContext()
  const showTable =
    globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter > 0

  const navigateTo = () => {
    url ? (window.location.href = url) : setShowModal(!showModal)
  }

  return (
    <>
      {showModal && (
        <Backdrop>
          <div className='flex flex-col justify-center items-center gap-5 h-[60vh] w-modal'>
            {showTable ? (
              <OrderTable />
            ) : (
              <p className='text-white'>La caja esta vacia...</p>
            )}
            <div className='flex flex-col justify-center grow'>
              <PayPalButtons
                className='overflow-y-auto'
                style={{ color: 'blue', layout: 'horizontal' }}
                // createOrder={() => {}}
                // onCancel={() => {}}
                // onApprove={() => {}}
              />
            </div>
            <button
              className='text-white text-lg '
              onClick={() => setShowModal(!showModal)}
            >
              Cerrar
            </button>
          </div>
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
