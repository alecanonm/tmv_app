'use client'

import { ImageWithFallback } from '@components/atoms'
import { classNames as cx } from 'primereact/utils'
import { useState } from 'react'

const VapePay = ({ vape }) => {
  const [toggleDescripcion, setToggleDescripcion] = useState(true)

  const imageInfo = vape?.images[0]?.vapes_images_id
  const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imageInfo?.image?.id}`
  const totalToPay = vape.quantity * vape.price

  return (
    <article className='flex flex-col md:flex-row gap-4'>
      <div role='img' className='md:w-[15%]'>
        <ImageWithFallback
          src={imageUrl}
          width={150}
          height={150}
          alt={vape?.flavor?.name}
        />
      </div>
      <section className='flex flex-col gap-2 text-slate-400 md:w-[85%]'>
        <div role='info' className='flex justify-between text-white'>
          <h2>
            <strong>{vape?.flavor?.name}</strong>
          </h2>
          <span>
            <b>{totalToPay}€</b>
          </span>
        </div>
        <summary className='flex flex-col'>
          <p>Cantidad {vape.quantity}</p>
          <p
            className={cx({
              'overflow-hidden line-clamp-2': toggleDescripcion,
            })}
          >
            {vape.description}
          </p>
        </summary>
        <div className='flex justify-between'>
          <p>
            <span
              className='cursor-pointer self-start text-yellow-600'
              onClick={() => setToggleDescripcion(!toggleDescripcion)}
            >
              {toggleDescripcion ? 'Mostrar más' : 'Mostrar menos'}
            </span>
          </p>
          <p className='self-end'>{vape.price}€ unidad</p>
        </div>
      </section>
    </article>
  )
}

export default VapePay
