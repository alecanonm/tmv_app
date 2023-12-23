'use client'

import { PayPalButton } from '@components/atoms'
import { useFetchLocalStorage } from '@hooks'
import { useVapesContext } from '@contexts/VapesContext'
import { useSearchParams } from 'next/navigation'
import { VapesToPay } from '@components/organisms'

const Checkout = () => {
  useFetchLocalStorage()
  const { vapesToBox } = useVapesContext()
  const searchParams = useSearchParams()
  const brandId = searchParams.get('brandId')

  const orderProducts = vapesToBox.filter((vape) => vape.brand.id === brandId)

  return (
    <section className='relative h-full'>
      <div className='hidden md:flex grow absolute inset-0'>
        <div className='w-full bg-brandCheckout' />
        <div className='w-full' />
      </div>
      <div className='md:container md:m-auto md:px-6 flex flex-col md:flex-row gap-2 md:gap-16 lg:gap-20 xl:gap-40 grow absolute inset-0 h-screen'>
        <div className='w-full flex md:justify-end lg:pr-5 max-md:bg-brandCheckout max-md:px-6 max-md:pt-10 grow'>
          <VapesToPay orderProducts={orderProducts} />
        </div>
        <div className='w-full flex items-center md:overflow-y-auto order-first md:order-last max-md:px-6'>
          <PayPalButton orderProducts={orderProducts} />
        </div>
      </div>
    </section>
  )
}

export default Checkout
