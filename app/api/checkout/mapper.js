import { CURRENCY_CODE } from './constants'

export const vapesToStripeOrderMapper = (vapes) => {
  const total =
    vapes.reduce((acc, vape) => acc + vape.price * vape.quantity, 0) + ''

  const items = vapes.map((vape) => {
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
