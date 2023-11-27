'use client'

import { CountButton, ImageWithFallback } from '@components/atoms'
import { useState } from 'react'

const VapeCard = ({
  img,
  flavor,
  setCountValue,
  countValue,
  unitPrice,
  description,
}) => {
  const [count, setCount] = useState(0)
  const [showDescription, setShowDescription] = useState(false)

  const increment = function increment() {
    setCount(count + 10)
    setCountValue(countValue + 10)
  }

  const decrement = function decrement() {
    if (count == 0) return
    setCount(count - 10)
    setCountValue(countValue - 10)
  }

  return (
    <>
      {showDescription && (
        <div className=' fixed flex items-center justify-center bg-[#000000c0] h-full top-0 w-full z-50 backdrop-blur-sm'>
          <div className=' bg-white flex flex-col items-center   w-2/5 p-5 rounded-lg max-sm:w-full'>
            <div
              role='button'
              className='font-bold self-end  bg-yellow-500 px-2 p-1 rounded-md'
              onClick={() => setShowDescription(!showDescription)}
            >
              x
            </div>
            <h1 className='text-4xl text-center'>
              <strong>{flavor}</strong>
            </h1>
            <figure>
              <ImageWithFallback
                src={img}
                width={300}
                height={300}
                alt={flavor}
              />
            </figure>
            <p>{description}</p>
          </div>
        </div>
      )}
      <article className='flex flex-col gap-2 justify-center items-center bg-white rounded-xl p-4'>
        <div className='flex gap-2 justify-around w-full'>
          <CountButton color={'bg-red-500'} content='-' onClick={decrement} />
          <div role='cell' className='border-2 grow rounded-lg text-center'>
            {count}
          </div>
          <CountButton color={'bg-green-500'} content='+' onClick={increment} />
        </div>
        <figure className='h-full flex items-center bg-[#00000021] rounded-xl'>
          <ImageWithFallback src={img} width={200} height={200} alt='vape' />
        </figure>
        <section className='flex flex-col items-center bg-[#00000021] rounded-xl w-full'>
          <h2 className=' mx-2 text-center'>{flavor}</h2>
          <h3>
            <strong className='text-[#46a832]'>{unitPrice * 10}€</strong>
          </h3>
        </section>
        <div
          role='button'
          className='font-bold bg-yellow-500 px-2 p-1 rounded-md'
          onClick={() => setShowDescription(!showDescription)}
        >
          Descripcion
        </div>
      </article>
    </>
  )
}

export default VapeCard
