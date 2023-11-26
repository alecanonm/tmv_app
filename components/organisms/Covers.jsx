'use client'

import { Cover } from '@components/molecules'
import useQueries from '@hooks/useQueries'
const Covers = () => {
  const { cover } = useQueries()
  return (
    <>
      {cover?.brands?.map((cover) => (
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
