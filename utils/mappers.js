export const CURRENCY_CODE = process.env.NEXT_PUBLIC_PAYPAL_CURRENCY

export const vapesToPayPalOrderMapper = (vapes) => {
  const total =
    vapes.reduce((acc, vape) => acc + vape.price * vape.quantity, 0) + ''

  const items = vapes.map((vape) => ({
    name: vape.flavor.name,
    quantity: vape.quantity + '',
    unit_amount: {
      currency_code: CURRENCY_CODE,
      value: vape.price + '',
    },
  }))

  return {
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
