'use client' // Error components must be Client Components

import logoShopping from '@public/assets/shopping.png'
import { ImageWrappedByArrows } from '@components/atoms'
import { useEffect } from 'react'

export default function Error({ error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <ImageWrappedByArrows image={logoShopping} />
    </div>
  )
}
