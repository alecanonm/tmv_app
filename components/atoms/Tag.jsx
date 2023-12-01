import tag from '@public/assets/tag.png'
import Image from 'next/image'

const Tag = ({ price }) => {
  return (
    <figure className='fixed top-20 right-0 sm:right-5 z-50'>
      <Image src={tag} alt='price' className='w-[80px] sm:w-28' />
      <p className='fixed  text-[#153414] top-[106px] sm:top-[118px] sm:right-[47px] right-[22px] -rotate-45 text-lg md:text-2xl'>
        <span>
          <strong>{price}</strong>
        </span>
        <span className='text-sm'>
          <strong>€</strong>
        </span>
      </p>
      <p className='fixed  text-[#153414] pt-2 top-[110px] sm:top-[130px] sm:right-[50px] right-[22px] -rotate-45  '>
        <strong>c/u</strong>
      </p>
    </figure>
  )
}

export default Tag
