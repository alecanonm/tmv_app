import { CURRENCY_CODE, DIRECTUS_BASE_URL } from './constants'

export const vapesToPayPalOrderMapper = (vapes) => {
  const total =
    vapes.reduce((acc, vape) => acc + vape.price * vape.quantity, 0) + ''

  const items = vapes.map((vape) => {
    const imageId = vape.images[0]?.vapes_images_id?.image?.id
    const imageUrl = `${DIRECTUS_BASE_URL}assets/${imageId}`
    console.log({ imageUrl })
    return {
      name: vape.flavor.name,
      quantity: vape.quantity + '',
      unit_amount: {
        currency_code: CURRENCY_CODE,
        value: vape.price + '',
      },
    }
  })

  return {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: CURRENCY_CODE,
          value: total,
          breakdown: {
            item_total: {
              currency_code: CURRENCY_CODE,
              value: total,
            },
          },
        },
        items,
      },
    ],
  }
}
