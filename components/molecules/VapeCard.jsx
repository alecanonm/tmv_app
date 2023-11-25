'use client'
import { CountButton, ImageWithFallback } from '@components/atoms'
import { useState } from 'react'

const VapeCard = ({ img, flavor, setCountValue, countValue }) => {
  const [count, setCount] = useState(0)

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
    <article className='flex flex-col gap-2 justify-center items-center bg-white rounded-xl p-4'>
      <div className='flex gap-2 justify-around w-full'>
        <CountButton color={'bg-red-500'} content='-' onClick={decrement} />
        <div className='border-2 grow rounded-lg text-center'>{count}</div>
        <CountButton color={'bg-green-500'} content='+' onClick={increment} />
      </div>
      <figure className='h-full flex items-center bg-[#00000021] rounded-xl'>
        <ImageWithFallback src={img} width={200} height={200} alt='vape' />
      </figure>
      <section className='flex flex-col items-center bg-[#00000021] rounded-xl w-full'>
        <h2 className='text-xl'>{flavor}</h2>
        <h3>
          <strong className='text-[#46a832]'>3.5€</strong>
        </h3>
      </section>
      <div
        role='button'
        className='font-bold bg-yellow-500 px-2 p-1 rounded-md'
      >
        Descripcion
      </div>
    </article>
  )
}

export default VapeCard
