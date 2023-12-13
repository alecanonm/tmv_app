import { SkeletonRect } from '@components/atoms'

const BrandSkeleton = () => (
  <div className='flex justify-center calc-h border-b-2 relative'>
    <SkeletonRect
      width='100%'
      height='24px'
      ratio='6px'
      className='absolute container top-5 !bg-white z-10'
    />
    <SkeletonRect width='100%' height='64px' ratio='0' />
  </div>
)
export default BrandSkeleton
