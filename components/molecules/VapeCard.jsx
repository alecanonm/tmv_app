'use client'

import { useState } from 'react'
import { ImageWithFallback } from '@components/atoms'
import { Backdrop } from '@components/atoms'
import { CardModal, VapesCounter } from '.'

const VapeCard = ({ imageInfo, flavor, unitPrice, description }) => {
  const [showDescription, setShowDescription] = useState(false)

  const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imageInfo?.image.id}`

  return (
    <>
      {showDescription && (
        <Backdrop>
          <CardModal
            img={imageUrl}
            flavor={flavor}
            description={description}
            showDescription={showDescription}
            setShowDescription={setShowDescription}
          />
        </Backdrop>
      )}
      <article className='flex flex-col gap-2 justify-center items-center bg-white rounded-lg p-4 w-[70vw] sm:w-auto'>
        <div className='flex gap-2 justify-around w-full'>
          <VapesCounter />
        </div>
        <figure className='h-full flex justify-center items-center bg-[#dedcdc52] rounded-lg w-full'>
          <ImageWithFallback
            src={imageUrl}
            width={imageInfo?.width || 200}
            height={imageInfo?.height || 200}
            alt={flavor}
          />
        </figure>
        <section className='flex flex-col items-center bg-[#ffffff21] rounded-lg w-full py-[0.15rem] px-2'>
          <h2 className='text-center'>
            <strong>{flavor}</strong>
          </h2>
          <h3>
            {/* <strong className='text-[#46a832]'>{unitPrice}€</strong> */}
          </h3>
        </section>
        <div
          role='button'
          className='font-bold bg-yellow-500 px-2 p-1 rounded-lg w-full sm:w-auto text-center'
          onClick={() => setShowDescription(!showDescription)}
        >
          Descripción
        </div>
      </article>
    </>
  )
}

export default VapeCard
