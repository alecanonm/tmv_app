import { ImageWithFallback } from '@components/atoms'
import { useRouter } from 'next/navigation'

const Cover = ({ id, title, img, width, height, bgColor }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`brand/${id}`)
  }

  return (
    <section
      className='max-sm:flex-col flex justify-center items-center h-screen text-white'
      style={{ backgroundColor: bgColor }}
    >
      <div className='flex flex-col gap-10'>
        <h1 className='uppercase font-bold text-4xl text-center'>{title}</h1>
        <button
          className='max-sm:hidden uppercase font-semibold hover:scale-110 transition p-2 w-64 rounded-lg bg-brandButton self-center'
          onClick={handleClick}
        >
          Saber mas
        </button>
      </div>
      <figure>
        <ImageWithFallback
          src={img}
          alt={title}
          width={width}
          height={height}
        />
      </figure>
      <button
        className='max-sm:block hidden uppercase font-semibold p-2 w-64 rounded-lg bg-brandButton'
        onClick={handleClick}
      >
        Saber mas
      </button>
    </section>
  )
}

export default Cover
