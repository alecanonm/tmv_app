'use client'

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import { NEXT_API_PATHS, vapesToPayPalOrderMapper } from '@utils'
import { PayPalSkeleton } from '@components/molecules/skeletons'
import axios from 'axios'

const style = {
  color: 'silver',
  layout: 'vertical',
  disableMaxWidth: true,
  shape: 'pill',
  height: 48,
  tagline: false,
  label: 'paypal',
}

async function onApprove(_, actions) {
  const order = await actions.order.capture()
  if (order.id) {
    await axios.post(NEXT_API_PATHS.sendEmail, { order })
    window.location.assign('/success')
  }
}

function onError(err) {
  console.error(err)
}

const ButtonWrapper = ({ orderProducts }) => {
  const [{ isPending }] = usePayPalScriptReducer()

  return isPending ? (
    <PayPalSkeleton />
  ) : (
    <PayPalButtons
      style={style}
      disabled={false}
      forceReRender={[style]}
      fundingSource={undefined}
      createOrder={(_, actions) => {
        return actions.order.create(vapesToPayPalOrderMapper(orderProducts))
      }}
      onApprove={onApprove}
      onError={onError}
    />
  )
}

const PayPalButton = ({ orderProducts }) => (
  <div className='w-full sm:w-[25rem] min-h-[100px] mt-10'>
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: process.env.NEXT_PUBLIC_PAYPAL_CURRENCY,
        components: 'buttons',
      }}
    >
      <ButtonWrapper orderProducts={orderProducts} />
    </PayPalScriptProvider>
  </div>
)

export default PayPalButton

// Tutorial: https://www.youtube.com/watch?v=sa9XtaKcSvo
// Storybook: https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default
