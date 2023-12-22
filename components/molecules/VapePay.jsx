'use client'

import { ImageWithFallback } from '@components/atoms'
import { useState } from 'react'

const VapePay = ({ vape, index }) => {
  const [showDescription, setShowDescription] = useState([])

  const imageInfo = vape?.images[0]?.vapes_images_id
  const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imageInfo?.image?.id}`
  const totalToPay = vape.quantity * vape.price
  const description = !showDescription[index]
    ? 'overflow-hidden line-clamp-2'
    : ''

  const toggleDescripcion = (index) => {
    setShowDescription((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  return (
    <article className='flex gap-4'>
      <div role='img' className='w-[15%]'>
        <ImageWithFallback
          src={imageUrl}
          width={300}
          height={200}
          alt={vape?.flavor?.name}
        />
      </div>
      <section className='flex flex-col text-slate-400 w-[85%]'>
        <div role='info' className='flex justify-between pb-2 text-white'>
          <h2>
            <strong>{vape?.flavor?.name}</strong>
          </h2>
          <span>
            <b>{totalToPay}€</b>
          </span>
        </div>
        <p>cantidad {vape.quantity}</p>
        <summary className='flex flex-col gap-2'>
          <p className={description}>{vape.description}</p>
          <span
            className='cursor-pointer self-start text-yellow-600'
            onClick={() => toggleDescripcion(index)}
          >
            {!showDescription[index] ? 'Mostart más' : 'Mostrar menos'}
          </span>
        </summary>
        <p className='self-end'>{vape.price}€ unidad</p>
      </section>
    </article>
  )
}

export default VapePay
