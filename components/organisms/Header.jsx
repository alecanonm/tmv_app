import { Navbar } from '@components/molecules'
import Image from 'next/image'
import Link from 'next/link'
// import vaperLogo from '@public/assets/vaper-logo.png'
import handVape from '@public/assets/handVape.svg'

const Header = () => {
  return (
    <header className='flex justify-between container mx-auto px-6 sm:px-0 py-1'>
      <Link href='/'>
        <Image src={handVape} alt='logo vaper' width={70} height={100} />
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
