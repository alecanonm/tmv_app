'use client'

import { PayPalButtons } from '@paypal/react-paypal-js'
import { OrderTable } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'

const Box = ({ setShowModal, showModal }) => {
  const { id: brandId } = useParams()
  const { globalCounter, globalQuantity } = useVapesContext()
  const showTable =
    globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter > 0

  const cantVapes = globalCounter[0]?.globalCounter

  return (
    <summary className='flex flex-col justify-center items-center max-h-[80vh]'>
      {showTable ? (
        <>
          <OrderTable />
          {cantVapes >= globalQuantity && (
            <PayPalButtons
              className='mt-4 w-full sm:w-auto'
              style={{
                color: 'blue',
                layout: 'horizontal',
                disableMaxWidth: true,
                shape: 'rect',
                height: 32,
                tagline: '',
                label: 'paypal',
              }}
              // createOrder={(data, actions) => {
              //   console.log(data, actions)
              // }}
              // onCancel={() => {}}
              // onApprove={() => {}}
            />
          )}
        </>
      ) : (
        <p className='text-black text-xl font-bold'>La caja esta vacia...</p>
      )}
      <button
        className='text-md bg-red-700 border-red-700 rounded-[4px] px-4 py-1 text-white w-full sm:w-auto min-w-[9.3rem]'
        onClick={() => setShowModal(!showModal)}
      >
        Cerrar
      </button>
      {cantVapes < globalQuantity && cantVapes > 0 && (
        <p className='text-center pt-2 text-red-400'>
          La cantidad minima es de {globalQuantity} vapes para continuar con la
          compra
        </p>
      )}
    </summary>
  )
}

export default Box
