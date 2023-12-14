export const STRIPE_SECRET_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
export const CURRENCY_CODE = process.env.NEXT_PUBLIC_STRIPE_CURRENCY
export const TMV_BASE_URL = process.env.NEXT_PUBLIC_TMV_BASE_URL
export const DIRECTUS_BASE_URL = process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL

export const TAX_CODES = {
  general_tangible_goods: 'txcd_99999999',
}

export const TAX_BEHAVIOR = {
  exclusive: 'exclusive',
  inclusive: 'inclusive',
}
