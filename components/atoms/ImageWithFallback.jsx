'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import fallbackImage from '@public/assets/vaper-logo.png'

const ImageWithFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <figure className='flex justify-center'>
      <Image
        src={error ? fallback : src}
        alt={alt}
        onError={setError}
        {...props}
      />
    </figure>
  )
}

export default ImageWithFallback
