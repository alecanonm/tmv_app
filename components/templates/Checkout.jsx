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
      <div className='flex grow absolute inset-0'>
        <div className='w-full bg-[#18222F]' />
        <div className='w-full' />
      </div>
      <div className='container m-auto flex gap-40 grow absolute inset-0 h-screen'>
        <div className='w-full flex flex-col justify-center items-end pr-5'>
          <VapesToPay orderProducts={orderProducts} />
        </div>
        <div className='w-full flex flex-col justify-center overflow-y-auto'>
          <PayPalButton orderProducts={orderProducts} />
        </div>
      </div>
    </section>
  )
}

export default Checkout
