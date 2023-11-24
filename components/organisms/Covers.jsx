'use client'

import { useSuspenseQuery } from '@apollo/client'
import { Cover } from '@components/molecules'
import { GET_COVERS } from '@utils'

const Covers = () => {
  const { data } = useSuspenseQuery(GET_COVERS)

  return (
    <>
      {data?.brands?.map((cover) => {
        const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${cover.image?.id}`
        return (
          <Cover
            key={cover.id}
            title={cover.name}
            img={imageUrl}
            width={600}
            height={600}
            bgColor={cover.color}
          />
        )
      })}
    </>
  )
}

export default Covers
