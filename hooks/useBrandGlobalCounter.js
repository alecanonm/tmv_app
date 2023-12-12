import { useVapesContext } from '@contexts/VapesContext'
import { useParams } from 'next/navigation'

const useBrandGlobalCounter = () => {
  const { id: brandId } = useParams()
  const { globalCounter } = useVapesContext()

  return {
    brandId,
    brandGC:
      globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter || 0,
  }
}

export default useBrandGlobalCounter
