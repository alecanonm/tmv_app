export const COUNTER_STEP = 10
export const TMV = 'TMV'
export const LS_GLOBAL_COUNTERS = `${TMV}_GlobalCounters`
export const LS_VAPES_TO_BOX = `${TMV}_VapesToBox`
export const LS_VERIFY_AGE = `${TMV}_VerifyAge`

export const errorMessages = {
  shortMandatoryField: 'Obligatorio.',
  mandatoryField: 'Este campo es obligatorio.',
  invalidFormat: 'El formato no es válido.',
}

export const NEXT_API_PATHS = {
  stripeCheckout: '/api/stripe/checkout',
  paypalCheckout: '/api/paypal/checkout',
}
