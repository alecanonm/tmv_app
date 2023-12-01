import fallbacklImage from '@public/assets/vaper-logo.png'
import { ImageWithFallback } from '@components/atoms'
import { useVapesContext } from '@contexts/VapesContext'
import { getCurrencyEUR } from '@utils'
import { useParams } from 'next/navigation'
import trash from '@public/assets/delete.png'
import { LS_VAPES_TO_BOX, setLocalStorage, LS_GLOBAL_COUNTERS } from '@utils'

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
    <div className='overflow-x-auto w-full sm:w-[150%]'>
      <table className='text-white w-full min-w-[30rem] '>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
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
                    <td>
                      <figure>
                        <ImageWithFallback
                          src={imageId ? imageUrl : fallbacklImage}
                          alt={flavor}
                          width={70}
                          height={70}
                        />
                      </figure>
                    </td>
                    <td>
                      <strong>{flavor}</strong>
                    </td>
                    <td>{qty}</td>
                    <td>{getCurrencyEUR(vape.price)}</td>
                    <td>{getCurrencyEUR(qty * vape.price)}</td>
                    <td>
                      <div role='button' onClick={() => handleDelete(vape.id)}>
                        <ImageWithFallback
                          src={trash}
                          alt='delete'
                          width={30}
                          height={30}
                        />
                      </div>
                    </td>
                  </tr>
                )
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable
