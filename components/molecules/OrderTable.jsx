import fallbacklImage from '@public/assets/vaper-logo.png'
import { ImageWithFallback } from '@components/atoms'
import { useVapesContext } from '@contexts/VapesContext'
import { getCurrencyEUR } from '@utils'
import { useParams } from 'next/navigation'

const OrderTable = () => {
  const { vapesToBox } = useVapesContext()
  const { id: brandId } = useParams()

  return (
    <div className='overflow-x-auto w-full'>
      <table className='text-white w-full min-w-[30rem]'>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
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
                          width={50}
                          height={50}
                        />
                      </figure>
                    </td>
                    <td>{flavor}</td>
                    <td>{qty}</td>
                    <td>{getCurrencyEUR(vape.price)}</td>
                    <td>{getCurrencyEUR(qty * vape.price)}</td>
                    <td>
                      <button type='button'>Eliminar</button>
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
