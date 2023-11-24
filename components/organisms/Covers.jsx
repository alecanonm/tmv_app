'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client'
import { Cover } from '@components/molecules'
import { GET_PRODUCTS } from '@utils'
import { useEffect } from 'react'

const Covers = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  useEffect(() => {
    console.log({ data, loading, error })
  }, [data])

  return (
    <>
      {data?.brands?.map((cover) => {
        const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${cover.id}`
        return (
          <Cover
            key={cover.id}
            title={cover.name}
            img={imageUrl}
            width={600}
            height={600}
            bgColor={`bg-[${cover.color}]`}
          />
        )
      })}
    </>
  )
}

export default Covers
