import { CountButton, ImageWithFallback } from '@components/atoms'

const vapeCard = ({ img }) => {
  return (
    <article className='flex flex-col gap-2 justify-center items-center bg-white rounded-xl p-4'>
      <div className='flex gap-2 justify-around w-full'>
        <CountButton color={'bg-red-500'} content='-' />
        <div className='border-2 grow rounded-lg text-center'>0</div>
        <CountButton color={'bg-green-500'} content='+' />
      </div>
      <figure className='h-full flex items-center'>
        <ImageWithFallback src={img} width={200} height={200} alt='vape' />
      </figure>
      <section className='flex flex-col items-center'>
        <h2>Cherry ice</h2>
        <h3>
          <strong>3.5€</strong>
        </h3>
      </section>
    </article>
  )
}

export default vapeCard
