import Image from 'next/image'
import Link from 'next/link'
import arrowLeft from '@public/assets/ArrowRight.png'
import arrowRight from '@public/assets/ArrowLeft.png'

const ImageWrappedByArrows = ({ image }) => (
  <figure className='flex justify-center items-center gap-8'>
    <Image
      src={arrowLeft}
      width={50}
      alt='Left row'
      className='animate-bounce-horizontal'
    />
    <Link href='/'>
      <Image
        src={image}
        alt='shopping'
        className='w-28 h-28 sm:w-52 sm:h-52 object-contain'
      />
    </Link>
    <Image
      src={arrowRight}
      alt='Right row'
      width={50}
      className='animate-bounce-horizontal-reverse'
    />
  </figure>
)

export default ImageWrappedByArrows
