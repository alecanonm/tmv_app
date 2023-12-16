'use client'

import { PayPalButton } from '@components/atoms'
import { useFetchLocalStorage } from '@hooks'

const Checkout = () => {
  useFetchLocalStorage()

  return (
    <section className='relative h-full'>
      <div className='flex grow absolute inset-0'>
        <div className='w-full bg-[#18222F]' />
        <div className='w-full' />
      </div>
      <div className='container m-auto flex gap-40 grow absolute inset-0 h-screen'>
        <div className='w-full flex flex-col justify-center overflow-y-auto items-end text-white'>
          Lista de productos
        </div>
        <div className='w-full flex flex-col justify-center overflow-y-auto'>
          <PayPalButton />
        </div>
      </div>
    </section>
  )
}

export default Checkout
