'use client'

import { useState } from 'react'
import { CountButton } from '@components/atoms'
import { useVapesContext } from '@contexts/VapesContext'
import { COUNTER_STEP } from '@utils'

const VapesCounter = ({ id }) => {
  const [counter, setCounter] = useState(0)
  const { setGlobalCounter } = useVapesContext()

  const { vapesPerBrand, setVapesToBox } = useVapesContext()

  const copyVapesPerBrand = { ...vapesPerBrand }

  const increment = function increment() {
    setCounter((prev) => prev + COUNTER_STEP)
    setGlobalCounter((prev) => prev + COUNTER_STEP)
    const vapeById = copyVapesPerBrand.vapes.find((vape) => vape.id === id)
    vapeById.quantity = counter + COUNTER_STEP
    setVapesToBox(copyVapesPerBrand)
  }

  const decrement = function decrement() {
    if (counter == 0) return
    setCounter((prev) => prev - COUNTER_STEP)
    setGlobalCounter((prev) => prev - COUNTER_STEP)
    const vapeById = copyVapesPerBrand.vapes.find((vape) => vape.id === id)
    vapeById.quantity -= COUNTER_STEP
    setVapesToBox(copyVapesPerBrand)
  }

  return (
    <>
      <CountButton color={'bg-red-500'} onClick={decrement} id={id}>
        -
      </CountButton>
      <div rol='cell' className='border-2 grow rounded-lg text-center'>
        {counter}
      </div>
      <CountButton color={'bg-green-500'} id={id} onClick={increment}>
        +
      </CountButton>
    </>
  )
}

export default VapesCounter
