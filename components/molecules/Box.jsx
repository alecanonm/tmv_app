'use client'

import { PayPalButtons } from '@paypal/react-paypal-js'
import { OrderTable } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'

const Box = ({ setShowModal, showModal }) => {
  const { id: brandId } = useParams()
  const { globalCounter } = useVapesContext()
  const showTable =
    globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter > 0

  return (
    <summary className='flex flex-col justify-center items-center gap-2 max-h-[80vh]'>
      {showTable ? (
        <>
          <OrderTable />
          <div className='flex flex-col justify-center'>
            <PayPalButtons
              className='overflow-y-auto'
              style={{ color: 'blue', layout: 'horizontal' }}
              createOrder={(data, actions) => {
                console.log(data, actions)
              }}
              // onCancel={() => {}}
              // onApprove={() => {}}
            />
          </div>
        </>
      ) : (
        <p className='text-black text-xl font-bold'>La caja esta vacia...</p>
      )}
      <button
        className='text-md bg-red-700 border-red-700 rounded-lg px-4 py-1 text-white w-full sm:w-auto'
        onClick={() => setShowModal(!showModal)}
      >
        Cerrar
      </button>
    </summary>
  )
}

export default Box
