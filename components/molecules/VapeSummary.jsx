import { ImageWithFallback } from '@components/atoms'

const VapeSummary = ({
  img,
  flavor,
  description,
  setShowDescription,
  showDescription,
}) => {
  return (
    <summary className='flex flex-col items-center'>
      <button
        type='button'
        className='font-bold self-end bg-yellow-500 px-3 p-1 rounded-md'
        onClick={() => setShowDescription(!showDescription)}
      >
        X
      </button>
      <h1 className='text-3xl md:text-4xl text-center'>
        <strong>{flavor}</strong>
      </h1>
      <ImageWithFallback src={img} width={300} height={300} alt={flavor} />
      <p>{description}</p>
    </summary>
  )
}

export default VapeSummary
