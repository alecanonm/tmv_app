'use client'

import axios from 'axios'
import Image from 'next/image'
import boxEmpty from '@public/assets/empty-box.png'
import { useState } from 'react'
import { OrderTable } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'
import { useBrandGlobalCounter } from '@hooks'

const Box = ({ showModal, setShowModal }) => {
  const { id: brandId } = useParams()
  const [loadingCheckout, setLoadingCheckout] = useState(false)
  const { globalQuantity, vapesToBox } = useVapesContext()
  const { brandGC } = useBrandGlobalCounter(brandId)

  const handleCheckout = async () => {
    setLoadingCheckout(true)
    const res = await axios.post('/api/checkout', {
      vapesToBox: vapesToBox.filter((vape) => vape.brand.id === brandId),
    })
    setLoadingCheckout(false)
    window.location.assign(res.data.url)
  }

  return (
    <summary className='flex flex-col gap-4 justify-center items-center'>
      {brandGC > 0 ? (
        <OrderTable />
      ) : (
        <figure>
          <Image src={boxEmpty} width={150} height={150} alt='empty-box' />
        </figure>
      )}
      <div className='flex flex-col md:flex-row gap-2 justify-center w-full'>
        <button
          className='custom-button bg-red-700 border-red-700 text-md'
          onClick={() => setShowModal(!showModal)}
        >
          Cerrar
        </button>
        {brandGC >= globalQuantity && (
          <button
            className='custom-button bg-blue-700 border-blue-700 text-md order-first md:order-last'
            onClick={handleCheckout}
          >
            <div className='flex gap-2 justify-center w-full'>
              {loadingCheckout && (
                <div>
                  <i className='pi pi-spin pi-spinner' />
                </div>
              )}
              <div>Checkout</div>
            </div>
          </button>
        )}
      </div>
      {brandGC > 0 && brandGC < globalQuantity && (
        <p className='text-center text-red-400'>
          La cantidad minima es de {globalQuantity} vapes para continuar con la
          compra
        </p>
      )}
    </summary>
  )
}

export default Box
