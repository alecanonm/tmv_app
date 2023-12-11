/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  COUNTER_STEP,
  LS_GLOBAL_COUNTERS,
  LS_VAPES_TO_BOX,
  setLocalStorage,
} from '@utils'
import { useEffect, useState } from 'react'
import { CountButton } from '@components/atoms'
import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'

const VapesCounter = ({ id }) => {
  const [counter, setCounter] = useState(0)
  const { vapesPerBrand, vapesToBox, setGlobalCounter, setVapesToBox } =
    useVapesContext()
  const { id: brandId } = useParams()

  const handleGlobalCounter = (prevGC, currentCount) => {
    const brandGC = prevGC.find((gc) => gc.brandId === brandId)
    const newGlobalCounter = {
      brandId,
      globalCounter: (brandGC ? brandGC.globalCounter : 0) + currentCount,
    }
    const resGC = [
      ...prevGC.filter((gc) => gc.brandId !== brandId),
      newGlobalCounter,
    ]
    setLocalStorage(LS_GLOBAL_COUNTERS, resGC)
    return resGC
  }

  const handleVapesQuantity = (boxVapes, quantity) => {
    const vape = vapesPerBrand.vapes.find((vape) => vape.id === id)
    const newVape = {
      ...vape,
      quantity,
      price: vapesPerBrand.prices[0].unit_price,
    }
    const deletedCurrentVape = boxVapes.filter((pv) => pv.id !== id)
    const resVPB =
      quantity > 0 ? [...deletedCurrentVape, newVape] : deletedCurrentVape
    setLocalStorage(LS_VAPES_TO_BOX, resVPB)
    return resVPB
  }

  const increment = function increment() {
    const currentCount = counter + COUNTER_STEP
    setCounter(currentCount)
    setGlobalCounter((prev) => handleGlobalCounter(prev, COUNTER_STEP))
    setVapesToBox((prevVapes) => handleVapesQuantity(prevVapes, currentCount))
  }

  const decrement = function decrement() {
    if (counter == 0) return
    const currentCount = counter - COUNTER_STEP
    setCounter(currentCount)
    setGlobalCounter((prev) => handleGlobalCounter(prev, -COUNTER_STEP))
    setVapesToBox((prevVapes) => handleVapesQuantity(prevVapes, currentCount))
  }

  useEffect(() => {
    const boxVape = vapesToBox.find((vape) => vape.id === id)
    setCounter(boxVape ? boxVape.quantity : 0)
  }, [vapesToBox])

  return (
    <div className='flex gap-2 justify-around w-full'>
      <CountButton color={'bg-red-500'} onClick={decrement}>
        -
      </CountButton>
      <div rol='cell' className='border-2 grow rounded-lg text-center'>
        {counter}
      </div>
      <CountButton color={'bg-green-500'} onClick={increment}>
        +
      </CountButton>
    </div>
  )
}

export default VapesCounter
