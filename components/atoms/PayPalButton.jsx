'use client'

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
// import { useVapesContext } from '@contexts/VapesContext' /// ??? why this doesn't work
import {
  LS_GLOBAL_COUNTERS,
  LS_VAPES_TO_BOX,
  NEXT_API_PATHS,
  getLocalStorage,
  vapesToPayPalOrderMapper,
} from '@utils'
import { useSearchParams } from 'next/navigation'
import { PayPalSkeleton } from '@components/molecules/skeletons'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
    window.localStorage.removeItem(LS_VAPES_TO_BOX)
    window.localStorage.removeItem(LS_GLOBAL_COUNTERS)
    window.location.assign('/success')
  }
}

function onError(err) {
  console.error(err)
}

const ButtonWrapper = () => {
  const [{ isPending }] = usePayPalScriptReducer()
  // const { vapesToBox } = useVapesContext()  /// ??? why this doesn't work
  const searchParams = useSearchParams()

  const [getVapesToBox, setVapesToBox] = useState([])

  useEffect(() => {
    setVapesToBox(getLocalStorage(LS_VAPES_TO_BOX))
  }, [])

  // console.log('vapesToBox', vapesToBox) /// ??? is empty the array that comes from context

  const brandId = searchParams.get('brandId')

  return isPending ? (
    <PayPalSkeleton />
  ) : (
    <PayPalButtons
      style={style}
      disabled={false}
      forceReRender={[style]}
      fundingSource={undefined}
      createOrder={(_, actions) => {
        const orderProducts = getVapesToBox.filter(
          (vape) => vape.brand.id === brandId,
        )
        return actions.order.create(vapesToPayPalOrderMapper(orderProducts))
      }}
      onApprove={onApprove}
      onError={onError}
    />
  )
}

const PayPalButton = () => (
  <div className='w-full sm:w-[25rem] min-h-[100px] mt-10'>
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

// Tutorial: https://www.youtube.com/watch?v=sa9XtaKcSvo
// Storybook: https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default
