'use client'

import { PayPalButton } from '@components/atoms'
import { VapesToPay } from '@components/molecules'
import { useFetchLocalStorage } from '@hooks'
import { useVapesContext } from '@contexts/VapesContext'
import { useSearchParams } from 'next/navigation'
const Checkout = () => {
  useFetchLocalStorage()
  const { vapesToBox } = useVapesContext()
  const searchParams = useSearchParams()
  const brandId = searchParams.get('brandId')
  const orderProducts = vapesToBox.filter((vape) => vape.brand.id === brandId)

  const totalToPay = orderProducts.reduce((acc, vape) => {
    return acc + vape.quantity * vape.price
  }, 0)

  return (
    <section className='relative h-full'>
      <div className='flex grow absolute inset-0'>
        <div className='w-full bg-[#18222F]' />
        <div className='w-full' />
      </div>
      <div className='container m-auto flex gap-40 grow absolute inset-0 h-screen'>
        <div className='w-full flex flex-col justify-center overflow-y-auto items-end text-white'>
          <h1 className='text-4xl grow-[0.3] self-center font-bold'>
            {`Total a pagar: ${totalToPay}€`}
          </h1>
          <VapesToPay getVapesToBox={orderProducts} />
        </div>
        <div className='w-full flex flex-col justify-center overflow-y-auto'>
          <PayPalButton />
        </div>
      </div>
    </section>
  )
}

export default Checkout
