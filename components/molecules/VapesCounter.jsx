'use client'

import { useState } from 'react'
import { CountButton } from '@components/atoms'
import { useVapesContext } from '@contexts/VapesContext'
import { COUNTER_STEP } from '@utils'

const VapesCounter = () => {
  const [counter, setCounter] = useState(0)
  const { setGlobalCounter } = useVapesContext()

  const increment = function increment() {
    setCounter((prev) => prev + COUNTER_STEP)
    setGlobalCounter((prev) => prev + COUNTER_STEP)
  }

  const decrement = function decrement() {
    if (counter == 0) return
    setCounter((prev) => prev - COUNTER_STEP)
    setGlobalCounter((prev) => prev - COUNTER_STEP)
  }

  return (
    <>
      <CountButton color={'bg-red-500'} onClick={decrement}>
        -
      </CountButton>
      <div rol='cell' className='border-2 grow rounded-lg text-center'>
        {counter}
      </div>
      <CountButton color={'bg-green-500'} onClick={increment}>
        +
      </CountButton>
    </>
  )
}

export default VapesCounter
