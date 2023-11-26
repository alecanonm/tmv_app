import { GET_VAPES, GET_PRICES, GET_COVERS } from '@utils'
import { useSuspenseQuery } from '@apollo/client'

function useQueries(params) {
  if (!params) {
    const { data: cover } = useSuspenseQuery(GET_COVERS)
    return { cover }
  }
  const { data: vape } = useSuspenseQuery(GET_VAPES, {
    variables: {
      brandId: params.id,
    },
  })

  const { data: price } = useSuspenseQuery(GET_PRICES, {
    variables: {
      brandId: params.id,
    },
  })

  return { vape, price }
}

export default useQueries
