/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import logo from '@public/assets/handVape.svg'
import Image from 'next/image'
import { useEffect } from 'react'
import { withConfetii } from '@hooks'
import arrow from '@public/assets/arrow.png'
import leftArrow from '@public/assets/leftArrow.png'

const Success = ({ fireConfetii }) => {
  useEffect(() => {
    fireConfetii()
  }, [])

  return (
    <section className='flex flex-col justify-center items-center h-screen gap-10'>
      <h1 className='text-2xl w-80 text-center sm:w-auto sm:text-4xl font-extrabold'>
        Gracias por comprar en Take My Vape
      </h1>
      <figure className='flex items-center justify-center gap-10'>
        <Image src={arrow} width={50} className='animate-bounce-horizontal' />
        <a href='/'>
          <Image src={logo} alt='logo' className='w-28 sm:w-52 smd:h-52' />
        </a>
        <Image
          src={leftArrow}
          width={50}
          className='animate-bounce-horizontal-reverse'
        />
      </figure>
      <div className='text-center flex flex-col gap-3 justify-center items-center'>
        <h3 className='text-xl w-80 sm:w-auto'>
          <strong>Tu compra se ha hecho exitosamente</strong>
        </h3>
        <p className='w-80 sm:w-96 text-center text-slate-500'>
          En breve recibirás un correo con los detalles de tu compra. Si no
          recibes el correo, por favor revisa tu bandeja de spam.
        </p>
      </div>
    </section>
  )
}

export default withConfetii(Success)
