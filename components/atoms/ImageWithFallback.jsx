'use client'

import { Suspense, useEffect, useState } from 'react'
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
    <Suspense fallback={<p className='text-red-900'>Loadign...</p>}>
      <Image
        src={error ? fallback : src}
        alt={alt}
        onError={setError}
        {...props}
      />
    </Suspense>
  )
}

export default ImageWithFallback
