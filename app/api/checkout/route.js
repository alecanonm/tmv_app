import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'
import { vapesToPayPalOrderMapper } from './mapper'
import { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } from './constants'

const environment = new paypal.core.SandboxEnvironment(
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
)
const clientPayPal = new paypal.core.PayPalHttpClient(environment)

export async function POST(req) {
  const body = await req.json()
  const paypalVapes = vapesToPayPalOrderMapper(body.vapesToBox)

  const request = new paypal.orders.OrdersCreateRequest()
  request.requestBody(paypalVapes)
  const res = await clientPayPal.execute(request)

  return NextResponse.json({ id: res.result.id })
}
