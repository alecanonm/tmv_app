'use client'

import Image from 'next/image'
import whatsapp from '@public/assets/whatsapp.png'
import { WHATSAPP_URL } from '@utils'

const WhatsappButton = () => (
  <button
    type='button'
    className='fixed left-8 bottom-9'
    onClick={() => window.location.assign(WHATSAPP_URL)}
  >
    <Image src={whatsapp} alt='whatsapp' width={55} heigth={55} />
  </button>
)

export default WhatsappButton
