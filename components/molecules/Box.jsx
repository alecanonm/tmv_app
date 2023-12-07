'use client'

import { PayPalButtons } from '@paypal/react-paypal-js'
import { OrderTable } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'
import classNames from 'classnames'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import axios from 'axios'

const Box = ({ setShowModal, showModal }) => {
  const { id: brandId } = useParams()
  const [value, setValue] = useState('')
  const { globalCounter, globalQuantity, vapesToBox } = useVapesContext()

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
          <form action=''>
            <div className=' text-center justify-center items-center flex  gap-6 flex-wrap  pt-6'>
              <span className='p-float-label'>
                <InputText
                  id='username'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className='bg-[#e0e0e0]'
                />
                <label htmlFor='username'>Nombre</label>
              </span>
              <span className='p-float-label'>
                <InputText
                  id='username'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className='bg-[#e0e0e0]'
                />
                <label htmlFor='username'>Apellido</label>
              </span>
              <span className='p-float-label'>
                <InputText
                  id='username'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className='bg-[#e0e0e0]'
                />
                <label htmlFor='username'>Direccion</label>
              </span>
              <span className='p-float-label'>
                <InputText
                  id='username'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className='bg-[#e0e0e0]'
                />
                <label htmlFor='username'>Codigo postal</label>
              </span>
              <span className='p-float-label'>
                <InputText
                  id='username'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className='bg-[#e0e0e0]'
                />
                <label htmlFor='username'>Telefono</label>
              </span>
            </div>
          </form>
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
                const res = await axios.post('/api/checkout', {
                  vapesToBox: vapesToBox.filter(
                    (vape) => vape.brand.id === brandId,
                  ),
                })
                return res.data.id
              }}
              onApprove={(data, actions) => {
                actions.order.capture()
                console.log('order was approved', actions.order.capture())
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
