/* eslint-disable no-undef */
'use client'

import axios from 'axios'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { OrderTable, ShippingForm } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'
import { classNames as cx } from 'primereact/utils'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import boxEmpty from '@public/assets/empty-box.png'

const Box = ({ setShowModal, showModal }) => {
  const { id: brandId } = useParams()
  const { globalCounter, globalQuantity, vapesToBox } = useVapesContext()

  const cantVapes =
    globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter || 0
  const showPaypal = cantVapes >= globalQuantity

  const defaultValues = {}
  const handleForm = useForm({ defaultValues })
  const { handleSubmit } = handleForm

  return (
    <summary
      className={cx(
        'flex flex-col justify-center items-center max-h-[80vh] overflow-y-auto',
        { 'gap-4': !showPaypal },
      )}
    >
      {cantVapes > 0 ? (
        <>
          <OrderTable />
          <ShippingForm handleForm={handleForm} />
        </>
      ) : (
        <figure>
          <Image src={boxEmpty} width={150} height={150} alt='empty-box' />
        </figure>
      )}
      {showPaypal && (
        <PayPalButtons
          className='mt-4 w-full sm:w-auto '
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
            handleSubmit(
              async (data) => {
                console.log({ data })
                const res = await axios.post('/api/checkout', {
                  vapesToBox: vapesToBox.filter(
                    (vape) => vape.brand.id === brandId,
                  ),
                })
                console.log({ res })
                return res.data.id
              },
              (errors) => {
                console.log({ errors })
                return null
              },
            )()
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
