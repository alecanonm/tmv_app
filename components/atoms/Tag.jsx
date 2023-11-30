import tag from '@public/assets/tag.png'
import Image from 'next/image'

const Tag = ({ price }) => {
  return (
    <figure className='fixed top-20 right-0 sm:right-5 z-50'>
      <Image src={tag} alt='price' className='w-[70px] sm:w-28' />
      <p className='fixed  text-[#153414] top-[100px] sm:top-[118px] sm:right-[47px] right-[11px] -rotate-45 text-lg md:text-2xl'>
        <span>
          <strong>{price}</strong>
        </span>
        <span className='text-sm'>
          <strong>€/u</strong>
        </span>
      </p>
    </figure>
  )
}

export default Tag
