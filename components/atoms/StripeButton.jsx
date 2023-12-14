'use client'

import axios from 'axios'
import { useState } from 'react'
import { useVapesContext } from '@contexts/VapesContext'
import { useBrandGlobalCounter } from '@hooks'
import { NEXT_API_PATHS } from '@utils'

const StripeButton = () => {
  const [loadingCheckout, setLoadingCheckout] = useState(false)
  const { vapesToBox } = useVapesContext()
  const { brandId } = useBrandGlobalCounter()

  const handleCheckout = async () => {
    setLoadingCheckout(true)
    const res = await axios.post(NEXT_API_PATHS.stripeCheckout, {
      vapesToBox: vapesToBox.filter((vape) => vape.brand.id === brandId),
    })
    setLoadingCheckout(false)
    window.location.assign(res.data.url)
  }

  return (
    <button
      className='custom-button bg-blue-700 border-blue-700 text-md order-first md:order-last'
      onClick={handleCheckout}
    >
      <div className='flex gap-2 justify-center w-full'>
        {loadingCheckout && (
          <div>
            <i className='pi pi-spin pi-spinner' />
          </div>
        )}
        <div>Checkout</div>
      </div>
    </button>
  )
}

export default StripeButton
