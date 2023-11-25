import Image from 'next/image'
import whatsapp from '@public/assets/whatsapp.png'

const WhatsappButton = () => {
  return (
    <div
      role='button'
      className='fixed max-sm:left-1  right-5 bottom-6 rounded-full'
    >
      <Image
        src={whatsapp}
        alt='shopping-cart'
        width={50}
        height={50}
        className='m-4'
      />
    </div>
  )
}

export default WhatsappButton
