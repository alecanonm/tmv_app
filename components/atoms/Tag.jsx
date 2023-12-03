import tag from '@public/assets/tag.png'
import Image from 'next/image'

const Tag = ({ price }) => {
  return (
    <>
      <figure className='absolute top-20 right-5'>
        <Image src={tag} alt='price' className='w-[80px] sm:w-28' />
      </figure>
      <section className='absolute top-[101px] sm:top-[115px] right-[43px] sm:right-[53px] -rotate-45 flex flex-col text-center text-[#153414]'>
        <p className='text-lg sm:text-2xl'>
          <span>
            <strong>{price}</strong>
          </span>
          <span className='text-sm'>
            <strong>€</strong>
          </span>
        </p>
        <p className='text-sm m-[-0.5rem]'>
          <strong>c/u</strong>
        </p>
      </section>
    </>
  )
}

export default Tag
