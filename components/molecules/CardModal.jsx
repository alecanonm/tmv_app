import { ImageWithFallback } from '@components/atoms'

const CardModal = ({
  img,
  flavor,
  description,
  setShowDescription,
  showDescription,
}) => {
  return (
    <summary className=' bg-white flex flex-col items-center   w-2/5 p-5 rounded-lg max-sm:w-full'>
      <div
        role='button'
        className='font-bold self-end  bg-yellow-500 px-3 p-1 rounded-md'
        onClick={() => setShowDescription(!showDescription)}
      >
        x
      </div>
      <h1 className='text-4xl text-center'>
        <strong>{flavor}</strong>
      </h1>
      <figure>
        <ImageWithFallback src={img} width={300} height={300} alt={flavor} />
      </figure>
      <p>{description}</p>
    </summary>
  )
}

export default CardModal
