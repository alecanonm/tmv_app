import fallbacklImage from '@public/assets/vaper-logo.png'
import trash from '@public/assets/delete.png'
import { ImageWithFallback } from '@components/atoms'
import { useVapesContext } from '@contexts/VapesContext'
import { getCurrencyEUR } from '@utils'
import { useParams } from 'next/navigation'
import { LS_VAPES_TO_BOX, setLocalStorage, LS_GLOBAL_COUNTERS } from '@utils'

const getCurrentVapes = (vapes, brandId) =>
  vapes.filter((vape) => vape.brand.id === brandId)

const OrderTable = () => {
  const { vapesToBox, setVapesToBox, setGlobalCounter } = useVapesContext()
  const { id: brandId } = useParams()

  const handleDelete = function handleDelete(id) {
    const vape = vapesToBox.find((vape) => vape.id === id)
    const newVape = {
      ...vape,
      quantity: 0,
    }

    const resVPB = [...vapesToBox.filter((pv) => pv.id !== id), newVape]
    setLocalStorage(LS_VAPES_TO_BOX, resVPB)
    setVapesToBox(resVPB)

    setGlobalCounter((prev) => {
      const brandGC = prev.find((gc) => gc.brandId === brandId)
      const newGlobalCounter = {
        brandId,
        globalCounter: brandGC.globalCounter - vape.quantity,
      }
      const resGC = [
        ...prev.filter((gc) => gc.brandId !== brandId),
        newGlobalCounter,
      ]
      setLocalStorage(LS_GLOBAL_COUNTERS, resGC)
      return resGC
    })
  }

  return (
    <div className='flex flex-col gap-2 w-full justify-center'>
      <div className='overflow-x-auto w-full'>
        <table className='text-black w-full min-w-[30rem]'>
          <thead>
            <tr>
              <th className='bg-brandGrayBG p-2 rounded-l-lg'>Imagen</th>
              <th className='bg-brandGrayBG p-2'>Nombre</th>
              <th className='bg-brandGrayBG p-2'>Cantidad</th>
              <th className='bg-brandGrayBG p-2'>Precio</th>
              <th className='bg-brandGrayBG p-2'>Total</th>
              <th className='bg-brandGrayBG p-2 rounded-r-lg'></th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {vapesToBox
              .filter((vape) => vape.brand.id === brandId)
              .map((vape) => {
                const imageId = vape.images[0].vapes_images_id.image?.id
                const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${imageId}`
                const qty = vape.quantity
                const flavor = vape.flavor.name
                return (
                  qty > 0 && (
                    <tr key={vape.id}>
                      <td className='min-w-[6rem]'>
                        <ImageWithFallback
                          src={imageId ? imageUrl : fallbacklImage}
                          alt={flavor}
                          width={55}
                          height={55}
                        />
                      </td>
                      <td className='min-w-[10rem]'>
                        <strong>{flavor}</strong>
                      </td>
                      <td>
                        {qty}
                        <em>/u</em>
                      </td>
                      <td className='min-w-[6rem]'>
                        {getCurrencyEUR(vape.price)}
                      </td>
                      <td className='min-w-[6rem]'>
                        {getCurrencyEUR(qty * vape.price)}
                      </td>
                      <td className='min-w-[3rem]'>
                        <button
                          role='button'
                          type='button'
                          onClick={() => handleDelete(vape.id)}
                        >
                          <ImageWithFallback
                            src={trash}
                            alt='delete'
                            width={20}
                            height={20}
                          />
                        </button>
                      </td>
                    </tr>
                  )
                )
              })}
          </tbody>
        </table>
      </div>
      <p className='text-lg text-center'>
        <strong>Total:</strong>{' '}
        <span className='text-[1.4rem] font-light'>
          {getCurrencyEUR(
            getCurrentVapes(vapesToBox, brandId).reduce(
              (acc, vape) => acc + vape.price * vape.quantity,
              0,
            ),
          )}
        </span>{' '}
        (
        {getCurrentVapes(vapesToBox, brandId).reduce(
          (acc, vape) => acc + vape.quantity,
          0,
        )}{' '}
        vapes)
      </p>
    </div>
  )
}

export default OrderTable
