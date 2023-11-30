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
          <div className='flex flex-col justify-center items-center gap-5 h-[60vh] w-modal border-2'>
            {showTable ? (
              <OrderTable />
            ) : (
              <p className='text-white'>No hay NI MIERDA!</p>
            )}
            <div className='flex flex-col justify-center grow'>
              <PayPalButtons
                className='overflow-y-auto'
                style={{ color: 'blue' }}
                // createOrder={() => {}}
                // onCancel={() => {}}
                // onApprove={() => {}}
              />
            </div>
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
