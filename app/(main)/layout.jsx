import { WhatsappButton } from '@components/atoms'
import { Footer, Header } from '@components/organisms'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main className='flex flex-col grow'>{children}</main>
    <Footer />
    <WhatsappButton />
  </>
)

export default MainLayout
