'use client' // Error components must be Client Components

import logoShopping from '@public/assets/shopping.png'
import { ImageWrappedByArrows } from '@components/atoms'
import { useEffect } from 'react'

export default function Error({ error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className='flex flex-col justify-center items-center h-screen gap-5 container mx-auto'>
      <h1 className='text-3xl sm:text-5xl text-[#333]'>
        <strong>¡Error vapeado!</strong>
      </h1>
      <div className='text-center'>
        <p className='text-2xl sm:text-3xl'>
          Algo mas denso que nuestros sabores premium se coló en el sistema
        </p>
        <p className='text-xl text-slate-600'>
          <em>Estamos purificando el sistema</em>
        </p>
      </div>
      <ImageWrappedByArrows image={logoShopping} />
    </section>
  )
}
