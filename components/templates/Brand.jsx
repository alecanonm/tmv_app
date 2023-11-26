'use client'

import { useState } from 'react'
import { VapeCard } from '@components/molecules'
import { ProgressBar } from 'primereact/progressbar'
import useQueries from '@hooks/useQueries'

const Brand = ({ params }) => {
  const [countValue, setCountValue] = useState(0)
  const { vape, price } = useQueries(params)

  const color = vape.vapes[0]?.brand.color
  const brandName = vape.vapes[0]?.brand.name
  const quantity = price?.prices[0]?.quantity
  const unitPrice = price?.prices[0]?.unit_price

  const valueTemplate = function valueTemplate() {
    return (
      <p>
        {countValue}/<strong>{quantity}</strong>
      </p>
    )
  }

  return (
    <div style={{ background: color }} className='flex flex-col grow'>
      <summary className='flex flex-col gap-8 grow container mx-auto'>
        <h1 className='text-4xl font-bold text-white text-center mt-8'>
          {brandName}
        </h1>
        <section className='flex flex-wrap justify-center gap-5 grow mb-8'>
          {vape.vapes.map((vape) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${vape?.images[0]?.vapes_images_id?.image.id}`
            const flavor = vape?.flavor.name
            return (
              <VapeCard
                key={vape.id}
                img={imageUrl}
                flavor={flavor}
                setCountValue={setCountValue}
                countValue={countValue}
                unitPrice={unitPrice}
              />
            )
          })}
        </section>
      </summary>
      <div className='sticky flex  justify-center bottom-0 bg-[#070707a0] backdrop-blur-sm w-full p-5  '>
        <ProgressBar
          value={countValue}
          displayValueTemplate={valueTemplate}
          color='#46a832'
          className=' w-96 h-5'
        />
      </div>
    </div>
  )
}

export default Brand
