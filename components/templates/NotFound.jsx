import Image from 'next/image'
import logo from '@public/assets/shopping.png'
import arrow from '@public/assets/arrow.png'
import leftArrow from '@public/assets/leftArrow.png'
const NotFound = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-10 h-screen'>
      <h1 className='text-3xl sm:text-5xl'>
        <strong>Not found 404</strong>
      </h1>
      <p className='text-slate-500 text-center text-lg sm:text-xl'>
        No te recomendamos esta marca, mejor explora nuestra tienda de vapes
      </p>
      <figure className='flex justify-center items-center gap-8'>
        <Image src={arrow} width={50} className='animate-bounce-horizontal' />
        <a href='/'>
          <Image
            src={logo}
            alt='shopping'
            className='w-28 h-28 sm:w-52 sm:h-52 cursor-pointer '
          />
        </a>
        <Image
          src={leftArrow}
          width={50}
          className='animate-bounce-horizontal-reverse'
        />
      </figure>
    </section>
  )
}

export default NotFound
