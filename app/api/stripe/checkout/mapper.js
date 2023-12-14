import {
  CURRENCY_CODE,
  DIRECTUS_BASE_URL,
  TAX_BEHAVIOR,
  TAX_CODES,
  TMV_BASE_URL,
} from './constants'

export const vapesToStripeOrderMapper = (vapes, stripeTaxId) => {
  const brandId = vapes[0].brand.id

  const line_items = vapes.map((vape) => {
    const imageId = vape.images[0]?.vapes_images_id?.image?.id
    const imageUrl = `${DIRECTUS_BASE_URL}assets/${imageId}`
    return {
      price_data: {
        currency: CURRENCY_CODE,
        product_data: {
          name: vape.flavor.name,
          description: vape.description,
          images: imageId ? [imageUrl] : [],
          tax_code: TAX_CODES.general_tangible_goods,
        },
        unit_amount_decimal: vape.price * 100,
        tax_behavior: TAX_BEHAVIOR.exclusive,
      },
      quantity: vape.quantity,
      tax_rates: [stripeTaxId],
    }
  })

  return {
    line_items,
    mode: 'payment',
    success_url: `${TMV_BASE_URL}/success`,
    cancel_url: `${TMV_BASE_URL}/brand/${brandId}`,
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['ES'],
    },
    phone_number_collection: {
      enabled: true,
    },
    locale: 'es',
  }
}
