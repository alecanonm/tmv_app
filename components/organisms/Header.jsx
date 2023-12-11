import { Navbar } from '@components/molecules'
import Image from 'next/image'
import Link from 'next/link'
import handVape from '@public/assets/handVape.svg'

const Header = () => (
  <header className='flex justify-between container mx-auto px-6 sm:px-0 py-2'>
    <Link href='/'>
      <Image src={handVape} alt='logo vaper' width={45} height={45} />
    </Link>
    <Navbar />
  </header>
)

export default Header
