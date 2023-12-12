'use client'

import { useState } from 'react'
import { ImageWithFallback } from '@components/atoms'
import { Backdrop } from '@components/atoms'
import { VapeSummary, VapesCounter } from '.'

const VapeCard = ({ imageInfo, flavor, description, id }) => {
  const [showDescription, setShowDescription] = useState(false)

  const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imageInfo?.image?.id}`

  return (
    <>
      {showDescription && (
        <Backdrop>
          <VapeSummary
            img={imageUrl}
            flavor={flavor}
            description={description}
            showDescription={showDescription}
            setShowDescription={setShowDescription}
          />
        </Backdrop>
      )}
      <article className='flex flex-col gap-2 justify-center items-center bg-white rounded-lg p-4 w-[70vw] sm:w-auto h-fit'>
        <VapesCounter id={id} />
        <div className='h-full flex justify-center items-center bg-brandGrayBG rounded-lg w-full min-w-[200px]'>
          <ImageWithFallback
            src={imageUrl}
            width={imageInfo?.width || 200}
            height={imageInfo?.height || 200}
            alt={flavor}
          />
        </div>
        <summary className='flex flex-col items-center bg-[#ffffff21] rounded-lg w-full py-[0.15rem] px-2'>
          <h2 className='text-center'>
            <strong>{flavor}</strong>
          </h2>
        </summary>
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
