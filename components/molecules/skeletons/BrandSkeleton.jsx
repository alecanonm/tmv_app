import { SkeletonCircle, SkeletonRect } from '@components/atoms'

const BrandSkeleton = () => (
  <div className='flex flex-col justify-center border-b-2'>
    <SkeletonRect
      width='100%'
      height='64px'
      ratio='0'
      className='p-5 flex justify-center'
    >
      <SkeletonRect
        width='100%'
        height='24px'
        ratio='6px'
        className='!bg-white container'
      />
    </SkeletonRect>
    <div className='flex flex-col justify-center gap-8 grow container mx-auto'>
      <SkeletonRect
        width='359px'
        height='35px'
        ratio='1rem'
        className='max-sm:hidden mt-8 self-center'
      />
      <div className='sm:hidden flex flex-col items-center gap-2 mt-8 self-center'>
        <SkeletonRect width='257px' height='35px' ratio='1rem' />
        <SkeletonRect width='100px' height='35px' ratio='1rem' />
      </div>
      <div className='flex flex-wrap justify-center gap-5 grow mb-8'>
        {[...Array(12).keys()].map((n) => (
          <div key={n} className='w-[70vw] sm:w-[232px]'>
            <SkeletonRect width='100%' height='354px' ratio='0.5rem' />
          </div>
        ))}
      </div>
    </div>
    <SkeletonCircle
      size='60px'
      className='absolute right-6 bottom-12 bg-[#c69976]'
    />
  </div>
)

export default BrandSkeleton
