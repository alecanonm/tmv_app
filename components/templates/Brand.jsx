'use client'

import { useState } from 'react'
import { useSuspenseQuery } from '@apollo/client'
import { GET_VAPES } from '@utils'
import { VapeCard } from '@components/molecules'
import { ProgressBar } from 'primereact/progressbar'

const Brand = ({ params }) => {
  const [countValue, setCountValue] = useState(0)

  const { data } = useSuspenseQuery(GET_VAPES, {
    variables: {
      brandId: params.id,
    },
  })

  console.log(data.vapes[0])
  const color = data.vapes[0]?.brand.color
  const brandName = data.vapes[0]?.brand.name

  const valueTemplate = function valueTemplate() {
    return (
      <>
        {countValue}/<b>{200}</b>
      </>
    )
  }

  return (
    <div style={{ background: color }} className='flex flex-col grow'>
      <section className='flex flex-col gap-8 grow container mx-auto'>
        <h1 className='text-4xl font-bold text-white text-center mt-8'>
          {brandName}
        </h1>
        <div className='flex flex-wrap justify-center gap-5 grow mb-8'>
          {data.vapes.map((vape) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${vape?.images[0]?.vapes_images_id?.image.id}`
            const flavor = vape?.flavor.name
            return (
              <VapeCard
                key={vape.id}
                img={imageUrl}
                flavor={flavor}
                setCountValue={setCountValue}
                countValue={countValue}
              />
            )
          })}
        </div>
      </section>
      <div className='sticky flex  justify-center bottom-0 bg-[#070707a0] backdrop-blur-sm w-full p-5  '>
        <ProgressBar
          value={countValue}
          displayValueTemplate={valueTemplate}
          style={{
            height: '20px',
            width: '50vw',
          }}
        />
      </div>
    </div>
  )
}

export default Brand
