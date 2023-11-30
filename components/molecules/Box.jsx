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
    <summary className='flex flex-col justify-center items-center gap-5 h-[80vh] w-modal'>
      {showTable ? (
        <>
          <OrderTable />
          <div className='flex flex-col justify-center py-5'>
            <PayPalButtons
              className='overflow-y-auto'
              style={{ color: 'blue', layout: 'horizontal' }}
              // createOrder={() => {}}
              // onCancel={() => {}}
              // onApprove={() => {}}
            />
          </div>
        </>
      ) : (
        <p className='text-white text-xl font-bold'>La caja esta vacia...</p>
      )}

      <button
        className='text-white text-l '
        onClick={() => setShowModal(!showModal)}
      >
        Cerrar
      </button>
    </summary>
  )
}

export default Box
