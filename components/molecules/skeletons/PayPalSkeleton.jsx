import { SkeletonRect } from '@components/atoms'

const PayPalSkeleton = () => (
  <div className='flex flex-col gap-4 justify-center md:mt-[-1.5rem]'>
    <SkeletonRect width='100%' height='48px' ratio='1.5rem' />
    <SkeletonRect width='100%' height='48px' ratio='1.5rem' />
  </div>
)
export default PayPalSkeleton
