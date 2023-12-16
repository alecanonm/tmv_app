/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import logoHandVape from '@public/assets/handVape.svg'
import { useEffect } from 'react'
import { withConfetii } from '@hooks'
import { ImageWrappedByArrows } from '@components/atoms'

const Success = ({ fireConfetii }) => {
  useEffect(() => {
    fireConfetii()
  }, [])

  return (
    <section className='flex flex-col justify-center items-center gap-10 h-screen container m-auto px-6'>
      <h1 className='text-2xl text-center sm:text-4xl font-extrabold'>
        Gracias por comprar en Take My Vape
      </h1>
      <ImageWrappedByArrows image={logoHandVape} />
      <div className='text-center flex flex-col gap-3 justify-center items-center'>
        <h3 className='text-xl'>
          <strong>Tu compra se ha hecho exitosamente</strong>
        </h3>
        <p className='w-full sm:w-[30rem] text-center text-slate-500'>
          En breve recibirás un correo con los detalles de tu compra. Si no
          recibes el correo, por favor revisa tu bandeja de spam.
        </p>
      </div>
    </section>
  )
}

export default withConfetii(Success)
