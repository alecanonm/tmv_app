import Image from 'next/image'
import fallbackImage from '@public/assets/vaper-logo.png'
import { useRouter } from 'next/navigation'

const Cover = ({ id, title, imgId, width, height }) => {
  const router = useRouter()
  const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imgId}`

  const handleClick = () => {
    router.push(`brand/${id}`)
  }

  return (
    <section className='max-sm:flex-col flex justify-center items-center h-screen text-white container mx-auto'>
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
        <Image
          src={imgId ? imageUrl : fallbackImage}
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
