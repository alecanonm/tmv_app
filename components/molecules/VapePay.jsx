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
        <p>Cantidad {vape.quantity}</p>
        <summary className='flex flex-col gap-2'>
          <p
            className={cx({
              'overflow-hidden line-clamp-2': toggleDescripcion,
            })}
          >
            {vape.description}
          </p>
          <span
            className='cursor-pointer self-start text-yellow-600'
            onClick={() => setToggleDescripcion(!toggleDescripcion)}
          >
            {toggleDescripcion ? 'Mostart más' : 'Mostrar menos'}
          </span>
        </summary>
        <p className='self-end'>{vape.price}€ unidad</p>
      </section>
    </article>
  )
}

export default VapePay
