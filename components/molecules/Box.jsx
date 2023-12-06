'use client'

import { PayPalButtons } from '@paypal/react-paypal-js'
import { OrderTable } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'
import classNames from 'classnames'

const Box = ({ setShowModal, showModal }) => {
  const { id: brandId } = useParams()
  const { globalCounter, globalQuantity } = useVapesContext()

  const cantVapes =
    globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter || 0
  const showPaypal = cantVapes >= globalQuantity

  return (
    <summary
      className={classNames(
        'flex flex-col justify-center items-center max-h-[80vh]',
        { 'gap-4': !showPaypal },
      )}
    >
      {cantVapes > 0 ? (
        <>
          <OrderTable />
          {showPaypal && (
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
              createOrder={async () => {
                const res = await fetch('/api/checkout', {
                  method: 'POST',
                })
                const order = await res.json()
                console.log(order)
                return order.id
              }}
              onApprove={(data, actions) => {
                actions.order.capture()
              }}
              onCancel={() => {
                console.log('order was cancelled')
              }}
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
