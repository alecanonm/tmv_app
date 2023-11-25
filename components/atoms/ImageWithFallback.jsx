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
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallback : src}
      {...props}
    />
  )
}

export default ImageWithFallback
