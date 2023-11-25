'use client'

import { useSuspenseQuery } from '@apollo/client'
import { Cover } from '@components/molecules'
import { GET_COVERS } from '@utils'
const Covers = () => {
  const { data } = useSuspenseQuery(GET_COVERS)

  return (
    <>
      {data?.brands?.map((cover) => (
        <section
          key={cover.id}
          style={{ background: cover.color }}
          className='flex grow'
        >
          <Cover
            id={cover.id}
            title={cover.name}
            imgId={cover.image?.id}
            width={600}
            height={600}
          />
        </section>
      ))}
    </>
  )
}

export default Covers
