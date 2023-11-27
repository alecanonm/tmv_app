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
        url={
          'https://wa.me/34613646137?text=Hi,%20i%20want%20information%20about%20your%20product!'
        }
      />
    </>
  )
}

export default MainLayout
