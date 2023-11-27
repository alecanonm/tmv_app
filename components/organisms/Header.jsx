import { Navbar } from '@components/molecules'
import Image from 'next/image'
import Link from 'next/link'
import vaperLogo from '@public/assets/vaper-logo.png'

const Header = () => {
  return (
    <header className='flex justify-between container mx-auto px-6 sm:px-0'>
      <Link href='/'>
        <Image src={vaperLogo} alt='logo vaper' width={100} height={100} />
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
