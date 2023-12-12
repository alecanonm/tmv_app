import { useVapesContext } from '@contexts/VapesContext'

const useBrandGlobalCounter = (brandId) => {
  const { globalCounter } = useVapesContext()

  return {
    brandGC:
      globalCounter.find((gc) => gc.brandId === brandId)?.globalCounter || 0,
  }
}

export default useBrandGlobalCounter
