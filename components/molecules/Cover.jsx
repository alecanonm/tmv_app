import { useRouter } from 'next/navigation'
import { ImageWithFallback } from '@components/atoms'
import fallbacklImage from '@public/assets/vaper-logo.png'

const Cover = ({ id, title, imgId }) => {
  const router = useRouter()
  const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imgId}`

  const handleClick = () => {
    router.push(`brand/${id}`)
  }

  return (
    <article className='max-sm:flex-col flex gap-4 justify-center items-center text-white container mx-auto h-[calc(100vh-100px)]'>
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
          src={imgId ? imageUrl : fallbacklImage}
          width={600}
          height={600}
          alt={title}
        />
      </figure>
      <button
        className='max-sm:block hidden uppercase font-semibold p-2 w-64 rounded-lg bg-brandButton'
        onClick={handleClick}
      >
        Saber mas
      </button>
    </article>
  )
}

export default Cover
