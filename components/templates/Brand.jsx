'use client'

import { useState } from 'react'
import { VapeCard } from '@components/molecules'
import { ProgressBar } from 'primereact/progressbar'
import { useSuspenseQuery } from '@apollo/client'
import { GET_VAPES } from '@utils'
import logoBox from '@public/assets/box.png'
import { CustomButton } from '@components/atoms'
const Brand = ({ params }) => {
  const [countValue, setCountValue] = useState(0)

  const { data: dataVapes } = useSuspenseQuery(GET_VAPES, {
    variables: {
      brandId: params.id,
    },
  })

  const color = dataVapes.vapes[0]?.brand.color
  const brandName = dataVapes.vapes[0]?.brand.name
  const quantity = dataVapes?.prices[0]?.quantity
  const unitPrice = dataVapes?.prices[0]?.unit_price

  const valueTemplate = function valueTemplate() {
    return (
      <p>
        {countValue}/<strong>{quantity}</strong>
      </p>
    )
  }

  return (
    <div style={{ background: color }} className='flex flex-col-reverse grow'>
      <summary className='flex flex-col gap-8 grow container mx-auto'>
        <h1 className='text-4xl font-bold text-white text-center mt-8'>
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
                setCountValue={setCountValue}
                countValue={countValue}
                unitPrice={unitPrice}
                description={description}
              />
            )
          })}
        </section>
      </summary>
      <div className='sticky flex  justify-center top-0 bg-[#070707a0] backdrop-blur-sm w-full p-5  '>
        <ProgressBar
          value={countValue}
          displayValueTemplate={valueTemplate}
          color='#46a832'
          className=' w-96 h-5 bg-slate-200'
        />
      </div>
      <CustomButton
        src={logoBox}
        alt='Box to vapes'
        width={90}
        height={90}
        xasies='right-0'
        yaxies='bottom-8'
      />
    </div>
  )
}

export default Brand
