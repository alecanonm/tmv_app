import { ImageWithFallback } from '@components/atoms'
import fallbacklImage from '@public/assets/vaper-logo.png'
import { useGoTo } from '@hooks'

const Cover = ({ id, title, imgId }) => {
  const { goToPage } = useGoTo()
  const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imgId}`

  const handleClick = () => {
    goToPage(`brand/${id}`)
  }

  return (
    <article className='max-sm:flex-col flex gap-4 justify-center items-center text-white container mx-auto h-[calc(100vh-63.83px)] px-6'>
      <div className='flex flex-col gap-10'>
        <h1 className='uppercase font-bold text-3xl md:text-4xl text-center '>
          {title}
        </h1>
        <button
          className='max-sm:hidden uppercase font-semibold hover:scale-110 transition p-2 w-64 rounded-lg bg-brandButton self-center'
          onClick={handleClick}
        >
          Saber más
        </button>
      </div>
      <ImageWithFallback
        src={imgId ? imageUrl : fallbacklImage}
        alt={title}
        width={600}
        height={600}
      />
      <button
        className='max-sm:block hidden uppercase font-semibold p-2 rounded-lg bg-brandButton w-full md:w-64'
        onClick={handleClick}
      >
        Saber más
      </button>
    </article>
  )
}

export default Cover
