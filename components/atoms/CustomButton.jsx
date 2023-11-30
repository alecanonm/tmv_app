'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Backdrop } from '@components/atoms'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useVapesContext } from '@contexts/VapesContext'

const CustomButton = ({ width, height, src, alt, xasies, yaxies, url }) => {
  const [showModal, setShowModal] = useState(false)
  const { vapesPerBrand, vapesToBox } = useVapesContext()

  const navigateTo = () => {
    url ? (window.location.href = url) : setShowModal(!showModal)
  }

  useEffect(() => {
    console.log(vapesToBox)
  }, [vapesToBox])

  return (
    <>
      {showModal && (
        <Backdrop>
          <div className='flex flex-col justify-center items-center gap-5 h-[60vh]'>
            <h1 className='text-3xl font-bold text-white text-center'>
              {vapesPerBrand?.vapes[0]?.flavor.name}
            </h1>
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
