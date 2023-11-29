import tag from '@public/assets/tag.png'
import Image from 'next/image'

const Tag = ({ price }) => {
  return (
    <figure className='fixed top-20 right-0 sm:right-5 z-50'>
      <Image src={tag} alt='price' className='w-16 sm:w-28' />
      <p className='fixed top-[96px] sm:top-[113px] sm:right-[46px] right-[8px] -rotate-45 text-xl md:text-2xl'>
        <span>
          <strong>{price}</strong>
        </span>
        <span className='text-lg'>
          <strong>€</strong>
        </span>
      </p>
    </figure>
  )
}

export default Tag
