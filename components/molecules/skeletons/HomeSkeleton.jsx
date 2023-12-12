import ContentLoader from 'react-content-loader'

const ContentLoaderRect = ({ width, height, ratio }) => (
  <ContentLoader
    speed={2}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor='#c7c7c7'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx={ratio} ry={ratio} width={width} height={height} />
  </ContentLoader>
)

const HomeSkeleton = () => (
  <div className='flex justify-center calc-h px-6'>
    <section className='max-sm:hidden container flex justify-center items-center gap-8 h-full'>
      <div className='w-[359px] flex flex-col justify-center items-center gap-10'>
        <div className='w-full'>
          <ContentLoaderRect width='135' height='13' ratio='5' />
        </div>
        <div className='w-[256px]'>
          <ContentLoaderRect width='93' height='15' ratio='3' />
        </div>
      </div>
      <div className='w-[600px]'>
        <ContentLoaderRect width='20' height='15' ratio='2' />
      </div>
    </section>
    <section className='hidden max-sm:flex container flex-col justify-center items-center gap-8'>
      <div className='w-full'>
        <ContentLoaderRect width='150' height='18' ratio='10' />
      </div>
      <div className='w-full'>
        <ContentLoaderRect width='20' height='14' ratio='1' />
      </div>
      <div className='w-full'>
        <ContentLoaderRect width='93' height='11' ratio='2' />
      </div>
    </section>
  </div>
)
export default HomeSkeleton
