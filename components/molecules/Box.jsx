'use client'

// import axios from 'axios'
import Image from 'next/image'
import boxEmpty from '@public/assets/empty-box.png'
import { useEffect } from 'react'
import { OrderTable } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'

const Box = ({ showModal, setShowModal }) => {
  const { id: brandId } = useParams()
  const { globalCounter, globalQuantity } = useVapesContext()

  const cantVapes =
    globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter || 0
  const showCheckout = cantVapes >= globalQuantity

  useEffect(() => {
    let locale = Intl.DateTimeFormat().resolvedOptions().locale
    console.log({ locale })
  }, [])

  return (
    <summary className='flex flex-col gap-4 justify-center items-center'>
      {cantVapes > 0 ? (
        <OrderTable />
      ) : (
        <figure>
          <Image src={boxEmpty} width={150} height={150} alt='empty-box' />
        </figure>
      )}
      <div className='flex flex-wrap gap-2 justify-center w-full'>
        <button
          className='custom-button bg-red-700 border-red-700 text-md'
          onClick={() => setShowModal(!showModal)}
        >
          Cerrar
        </button>
        {showCheckout && (
          <button
            className='custom-button bg-blue-700 border-blue-700 text-md'
            onClick={() => {
              console.log('Checkout!')
            }}
          >
            Checkout
          </button>
        )}
      </div>
      {cantVapes > 0 && cantVapes < globalQuantity && (
        <p className='text-center text-red-400'>
          La cantidad minima es de {globalQuantity} vapes para continuar con la
          compra
        </p>
      )}
    </summary>
  )
}

export default Box

// await axios.post('/api/checkout', {
//   vapesToBox: vapesToBox.filter(
//     (vape) => vape.brand.id === brandId,
//   ),
// })
