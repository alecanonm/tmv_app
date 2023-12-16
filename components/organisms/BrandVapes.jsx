/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { GET_VAPES } from '@utils'
import { VapeCard } from '@components/molecules'
import { ProgressBar } from 'primereact/progressbar'
import { useSuspenseQuery } from '@apollo/client'
import { BoxButton } from '@components/atoms'
import { useVapesContext } from '@contexts/VapesContext'
import { useEffect } from 'react'
import { Tag } from '@components/atoms/'
import { useBrandGlobalCounter } from '@hooks'

const BrandVapes = () => {
  const { globalQuantity, setGlobalQuantity, setVapesPerBrand } =
    useVapesContext()
  const { brandId, brandGC } = useBrandGlobalCounter()

  const { data: dataVapes } = useSuspenseQuery(GET_VAPES, {
    variables: {
      brandId: brandId,
    },
  })

  useEffect(() => {
    setVapesPerBrand(dataVapes)
    setGlobalQuantity(Number(dataVapes?.prices[0]?.quantity || 0))
  }, [dataVapes])

  return (
    <div
      style={{ background: dataVapes?.vapes[0]?.brand.color }}
      className='flex flex-col-reverse grow'
    >
      <summary className='flex flex-col gap-8 grow container mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-white text-center mt-8 px-[6rem] md:px-0'>
          {dataVapes?.vapes[0]?.brand.name}
        </h1>
        <section className='flex flex-wrap justify-center gap-5 grow mb-8'>
          {dataVapes?.vapes.map((vape) => {
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
        <ProgressBar
          value={(brandGC * 100) / globalQuantity}
          displayValueTemplate={() => null}
          color='#46a832'
          className='container h-6 bg-slate-200'
        />
        <span className='absolute flex justify-center bg-transparent backdrop-blur-lg text-black'>
          <strong>
            {brandGC}/{globalQuantity}
          </strong>
        </span>
        <div>
          <Tag price={dataVapes?.prices[0]?.unit_price} />
        </div>
      </div>
      <BoxButton />
    </div>
  )
}

export default BrandVapes
