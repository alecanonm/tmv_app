'use client'

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import axios from 'axios'
import { useVapesContext } from '@contexts/VapesContext'
import { useBrandGlobalCounter } from '@hooks'
import { NEXT_API_PATHS } from '@utils'

const style = {
  color: 'blue',
  layout: 'vertical',
  disableMaxWidth: true,
  shape: 'rect',
  height: 32,
  tagline: '',
  label: 'paypal',
}

function onClick(data, actions) {
  console.log('order was clicked', data, actions)
}

async function createOrder(vapesToBox, brandId) {
  const res = await axios.post(NEXT_API_PATHS.paypalCheckout, {
    vapesToBox: vapesToBox.filter((vape) => vape.brand.id === brandId),
  })
  console.log({ res })
  return res.data.id
}

function onApprove(data, actions) {
  console.log('order was approved', data, actions)
}

function onCancel(data, actions) {
  console.log('order was cancelled', data, actions)
}

const ButtonWrapper = () => {
  const [{ isPending }] = usePayPalScriptReducer()
  const { vapesToBox } = useVapesContext()
  const { brandId } = useBrandGlobalCounter()

  return isPending ? (
    <p>Loading PayPal buttons...</p>
  ) : (
    <PayPalButtons
      style={style}
      disabled={false}
      forceReRender={[style]}
      fundingSource={undefined}
      onClick={onClick}
      createOrder={(data, actions) => {
        console.log('Crete order in progress', data, actions)
        return createOrder(vapesToBox, brandId)
      }}
      onApprove={onApprove}
      onCancel={onCancel}
    />
  )
}

const PayPalButton = () => (
  <div className='w-full sm:w-[25rem]'>
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: process.env.NEXT_PUBLIC_PAYPAL_CURRENCY,
        components: 'buttons',
      }}
    >
      <ButtonWrapper />
    </PayPalScriptProvider>
  </div>
)

export default PayPalButton
