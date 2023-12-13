import { SkeletonRect } from '@components/atoms'

const BrandSkeleton = () => (
  <div className='flex justify-center calc-h border-b-2'>
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
  </div>
)
export default BrandSkeleton
