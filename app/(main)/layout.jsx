import { CustomButton } from '@components/atoms'
import { Footer, Header } from '@components/organisms'
import whatsapp from '@public/assets/whatsapp.png'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='flex flex-col grow'>{children}</main>
      <Footer />
      <CustomButton
        src={whatsapp}
        width={60}
        heigth={60}
        alt='whatsapp'
        yaxies='bottom-12'
      />
    </>
  )
}

export default MainLayout
