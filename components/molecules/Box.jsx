import Image from 'next/image'
import boxEmpty from '@public/assets/empty-box.png'
import { OrderTable } from '@components/molecules'
import { useVapesContext } from '@contexts/VapesContext'
import { useBrandGlobalCounter } from '@hooks'
import { PayPalButton } from '@components/atoms'

const Box = ({ showModal, setShowModal }) => {
  const { globalQuantity } = useVapesContext()
  const { brandGC } = useBrandGlobalCounter()

  return (
    <summary className='flex flex-col gap-4 justify-center items-center'>
      {brandGC > 0 ? (
        <OrderTable />
      ) : (
        <figure>
          <Image src={boxEmpty} width={150} height={150} alt='empty-box' />
        </figure>
      )}
      <div className='flex flex-col gap-2 justify-center items-center w-full'>
        {brandGC >= globalQuantity && <PayPalButton />}
        <button
          className='custom-button bg-red-700 border-red-700 text-md sm:w-[25rem]'
          onClick={() => setShowModal(!showModal)}
        >
          Cerrar
        </button>
      </div>
      {brandGC > 0 && brandGC < globalQuantity && (
        <p className='text-center text-red-400'>
          La cantidad minima es de {globalQuantity} vapes para continuar con la
          compra
        </p>
      )}
    </summary>
  )
}

export default Box
