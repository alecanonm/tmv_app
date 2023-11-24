import ContentLoader from 'react-content-loader'

const HomeSkeleton = () => (
  <div>
    <section className='max-sm:hidden flex justify-center h-screen items-center'>
      <ContentLoader
        speed={2}
        viewBox='0 0 600 200'
        backgroundColor='#c7c7c7'
        foregroundColor='#ecebeb'
      >
        <rect x='367' y='1' rx='11' ry='11' width='97' height='119' />
        <rect x='117' y='23' rx='1' ry='1' width='189' height='7' />
        <rect x='118' y='37' rx='1' ry='1' width='188' height='7' />
        <rect x='118' y='49' rx='2' ry='2' width='189' height='7' />
        <rect x='140' y='81' rx='10' ry='10' width='134' height='27' />
        <rect x='211' y='92' rx='0' ry='0' width='0' height='2' />
      </ContentLoader>
    </section>
    <section className='hidden max-sm:block pt-5'>
      <ContentLoader
        viewBox='0 0 380 420'
        backgroundColor='#e3e3e3'
        foregroundColor='#ecebeb'
      >
        <rect x='75' y='10' rx='2' ry='2' width='226' height='10' />
        <rect x='76' y='26' rx='2' ry='2' width='225' height='9' />
        <rect x='77' y='63' rx='6' ry='6' width='220' height='283' />
        <rect x='76' y='42' rx='2' ry='2' width='225' height='9' />
        <rect x='98' y='374' rx='10' ry='10' width='175' height='39' />
      </ContentLoader>
    </section>
  </div>
)
export default HomeSkeleton
