'use client'

import Image from 'next/image'
import logoBox from '@public/assets/box.png'
import { useVapesContext } from '@contexts/VapesContext'
import { useBrandGlobalCounter, withToast } from '@hooks'

const BoxButton = ({ showWarning }) => {
  const { globalQuantity } = useVapesContext()
  const { brandId, brandGC } = useBrandGlobalCounter()

  const handleClick = () => {
    if (brandGC >= globalQuantity) {
      window.location.assign(`/checkout?brandId=${brandId}`)
    } else {
      showWarning(
        'No has alcanzado la cantidad mínima',
        <p>
          Para poder comprar debes alcanzar la cantidad mínima de{' '}
          <strong>{globalQuantity} vapes.</strong>
        </p>,
      )
    }
  }

  return (
    <button
      type='button'
      className='fixed right-5 bottom-5'
      onClick={handleClick}
    >
      <Image src={logoBox} alt='Box to vapes' width={90} height={90} />
    </button>
  )
}

export default withToast(BoxButton)
