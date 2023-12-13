import { SkeletonRect } from '@components/atoms'

const HomeSkeleton = () => (
  <div className='flex justify-center calc-h border-y-2'>
    <section className='max-sm:hidden container mx-auto flex justify-center items-center gap-8 h-full px-6'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-wrap justify-center gap-2'>
          <SkeletonRect width='257px' height='35px' ratio='1rem' />
          <SkeletonRect width='100px' height='35px' ratio='1rem' />
        </div>
        <SkeletonRect width='16rem' height='40px' ratio='0.5rem' />
      </div>
      <SkeletonRect width='600px' height='400px' ratio='1rem' />
    </section>
    <section className='hidden max-sm:flex container mx-auto flex-col justify-center items-center gap-8 h-full px-6'>
      <SkeletonRect width='100%' height='35px' ratio='1rem' />
      <SkeletonRect width='100%' height='245px' ratio='1rem' />
      <SkeletonRect width='100%' height='40px' ratio='0.5rem' />
    </section>
  </div>
)
export default HomeSkeleton
