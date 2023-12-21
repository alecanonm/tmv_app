'use client'

import { useEffect, useState } from 'react'
import { getLocalStorage, LS_VAPES_TO_BOX } from '@utils'
import { ImageWithFallback } from '@components/atoms'

const VapesToPay = () => {
  const [getVapesToBox, setVapesToBox] = useState([])
  const [showDescription, setShowDescription] = useState(
    Array(getVapesToBox.length).fill(false),
  )

  useEffect(() => {
    setVapesToBox(getLocalStorage(LS_VAPES_TO_BOX))
  }, [])

  const toggleDescripcion = (index) => {
    setShowDescription((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  return (
    <section className='flex flex-col gap-7'>
      {getVapesToBox.map((vape, index) => {
        const description = !showDescription[index]
          ? 'overflow-hidden line-clamp-2'
          : ''
        const imageInfo = vape?.images[0]?.vapes_images_id
        const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imageInfo?.image?.id}`
        const totalToPay = vape.quantity * vape.price
        return (
          <article key={index} className='flex container mx-auto gap-4'>
            <div role='img'>
              <ImageWithFallback
                src={imageUrl}
                width={300}
                height={200}
                alt={vape?.flavor?.name}
              />
            </div>
            <section className='flex flex-col text-slate-400'>
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
                  {!showDescription[index] ? 'Mostart mas' : 'Mostrar menos'}
                </span>
              </summary>
              <p className='self-end'>{vape.price}€ unidad</p>
            </section>
          </article>
        )
      })}
    </section>
  )
}

export default VapesToPay
