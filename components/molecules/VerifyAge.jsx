'use client'

import Image from 'next/image'
import logo from '@public/assets/handVape.svg'
import { useEffect, useState } from 'react'
import { Backdrop } from '@components/atoms'
import { LS_VERIFY_AGE, setLocalStorage, getLocalStorage } from '@utils'

const VerifyAge = () => {
  const [showModal, setShowModal] = useState(false)

  const handleVerifyAge = () => {
    setShowModal(!showModal)
    setLocalStorage(LS_VERIFY_AGE, true)
  }

  useEffect(() => {
    setShowModal(getLocalStorage(LS_VERIFY_AGE))
  }, [])

  return (
    !showModal && (
      <Backdrop>
        <div className='flex gap-2 flex-col text-center justify-center items-center sm:max-h-full my-4'>
          <h1 className='text-2xl sm:text-5xl'>
            <strong>Bienvenido a Take my vape</strong>
          </h1>
          <figure>
            <Image src={logo} alt='logo' className='w-28 sm:w-52 smd:h-52' />
          </figure>
          <h2 className='text-xl sm:text-3xl font-semibold'>
            Para ingrese a este sitio debes ser mayor de edad.
          </h2>
          <p className='text-lg sm:text-xl text-slate-500'>
            Por favor verifica tu edad antes de entrar al sitio.
          </p>
          <div className='flex gap-2 flex-wrap my-5'>
            <button
              onClick={handleVerifyAge}
              className='text-md font-bold uppercase bg-transparent border-red-700 rounded-[4px] px-4 py-2 text-black border-2 w-full sm:w-auto min-w-[9.3rem]'
            >
              Soy mayor de 18 años
            </button>
            <button
              onClick={() => (window.location.href = 'https://www.google.com/')}
              className='text-md font-bold uppercase bg-red-700 border-red-700 rounded-[4px] px-4 py-2 text-white w-full sm:w-auto min-w-[9.3rem]'
            >
              Soy menor de 18 años
            </button>
          </div>
          <p className='text-md sm:text-xl text-slate-500'>
            18+ Producto exclusivo para mayores de edad. Contiene nicotina la
            cual es adictiva
          </p>
        </div>
      </Backdrop>
    )
  )
}

export default VerifyAge
