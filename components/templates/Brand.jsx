'use client'

import { useSuspenseQuery } from '@apollo/client'
import { GET_VAPES } from '@utils'
import { VapeCard } from '@components/molecules'

const Brand = ({ params }) => {
  const { data } = useSuspenseQuery(GET_VAPES, {
    variables: {
      brandId: params.id,
    },
  })

  console.log(data.vapes[0])

  const color = data.vapes[0]?.brand.color
  const brandName = data.vapes[0]?.brand.name

  return (
    <div style={{ background: color }} className='flex grow'>
      <section className='flex flex-col gap-8 grow container mx-auto'>
        <h1 className='text-4xl font-bold text-white text-center mt-8'>
          {brandName}
        </h1>
        <div className='flex flex-wrap justify-center gap-5 grow mb-8'>
          {data.vapes.map((vape) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${vape?.images[0]?.vapes_images_id?.image.id}`
            return <VapeCard key={vape.id} img={imageUrl} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Brand
