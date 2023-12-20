import { SkeletonRect } from '@components/atoms'

const PayPalSkeleton = () => (
  <div className='flex flex-col gap-4 justify-center mt-[-1.5rem]'>
    <SkeletonRect width='400px' height='48px' ratio='1.5rem' />
    <SkeletonRect width='400px' height='48px' ratio='1.5rem' />
  </div>
)
export default PayPalSkeleton
