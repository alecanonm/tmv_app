/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  GET_VAPES,
  LS_GLOBAL_COUNTERS,
  LS_VAPES_TO_BOX,
  getLocalStorage,
} from '@utils'
import logoBox from '@public/assets/box.png'
import { VapeCard } from '@components/molecules'
import { ProgressBar } from 'primereact/progressbar'
import { useSuspenseQuery } from '@apollo/client'
import { CustomButton } from '@components/atoms'
import { useVapesContext } from '@contexts/VapesContext'
import { useEffect } from 'react'
import { Tag } from '@components/atoms/'

const Brand = ({ params }) => {
  const {
    globalCounter,
    globalQuantity,
    setGlobalQuantity,
    setVapesPerBrand,
    setGlobalCounter,
    setVapesToBox,
  } = useVapesContext()

  const { data: dataVapes } = useSuspenseQuery(GET_VAPES, {
    variables: {
      brandId: params.id,
    },
  })

  const color = dataVapes.vapes[0]?.brand.color
  const brandName = dataVapes.vapes[0]?.brand.name
  const unitPrice = dataVapes?.prices[0]?.unit_price
  const brandGlobalCounter = globalCounter.find(
    (gc) => gc.brandId === params.id,
  )

  useEffect(() => {
    setGlobalQuantity(dataVapes?.prices[0]?.quantity)
  }, [])

  useEffect(() => {
    setVapesPerBrand(dataVapes)
    setGlobalCounter(getLocalStorage(LS_GLOBAL_COUNTERS) || [])
    setVapesToBox(getLocalStorage(LS_VAPES_TO_BOX) || [])
  }, [dataVapes])

  return (
    <div style={{ background: color }} className='flex flex-col-reverse grow'>
      <summary className='flex flex-col gap-8 grow container mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-white text-center mt-8'>
          {brandName}
        </h1>
        <section className='flex flex-wrap justify-center gap-5 grow mb-8'>
          {dataVapes.vapes.map((vape) => {
            const imageInfo = vape?.images[0]?.vapes_images_id
            const flavor = vape?.flavor.name
            const description = vape?.description
            return (
              <VapeCard
                key={vape.id}
                imageInfo={imageInfo}
                flavor={flavor}
                description={description}
                id={vape.id}
              />
            )
          })}
        </section>
      </summary>
      <div className='sticky flex justify-center top-0 bg-[#070707a0] backdrop-blur-sm w-full p-5'>
        <div className='relative'>
          <Tag price={unitPrice} />
        </div>
        <ProgressBar
          value={
            ((brandGlobalCounter?.globalCounter || 0) * 100) / globalQuantity
          }
          displayValueTemplate={() => null}
          color='#46a832'
          className='container h-6 bg-slate-200'
        />
        <span className='absolute right-[46%] bg-transparent backdrop-blur-lg top-5 text-black'>
          <strong>
            {brandGlobalCounter?.globalCounter || 0}/{globalQuantity}
          </strong>
        </span>
      </div>
      <CustomButton
        src={logoBox}
        alt='Box to vapes'
        width={90}
        height={90}
        xaxies='right-[7px]'
        yaxies='bottom-8'
      />
    </div>
  )
}

export default Brand
