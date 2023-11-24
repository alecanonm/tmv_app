import Image from 'next/image'
import shoppingCart from '@public/assets/shopping-cart.png'

const WhatsappButton = () => {
  return (
    <div
      role='button'
      className='fixed bg-[#6a9855] right-5 bottom-6 rounded-full'
    >
      <Image
        src={shoppingCart}
        alt='shopping-cart'
        width={30}
        height={30}
        className='m-4'
      />
    </div>
  )
}

export default WhatsappButton
