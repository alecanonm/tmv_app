import { ImageWithFallback } from 'components/atoms'

const vapeCard = ({ img }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-white rounded-xl'>
      <div className='flex justify-around w-full m-2'>
        <button className='bg-red-500 w-12 rounded-full'>-</button>
        <div className='border-2 w-32'>0</div>
        <button className='bg-green-500 w-12 rounded-full'>+</button>
      </div>
      <figure className=' w-[200px] h-[100%] flex items-center'>
        <ImageWithFallback src={img} width={200} height={200} alt='vape' />
      </figure>
      <div className=''>
        <h1 className=''>Cherry ice</h1>
        <h3 className=''>3.5€</h3>
      </div>
    </div>
  )
}

export default vapeCard
