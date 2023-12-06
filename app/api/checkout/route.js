import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'

const clientID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET
const environment = new paypal.core.SandboxEnvironment(clientID, clientSecret)
const client = new paypal.core.PayPalHttpClient(environment)

export async function POST() {
  const request = new paypal.orders.OrdersCreateRequest()

  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: '100.00',

          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: '100.00',
            },
          },
        },
        items: [
          {
            name: 'vapes',
            unit_amount: {
              currency_code: 'USD',
              value: '50.00',
            },
            quantity: '1',
          },
          {
            name: 'vapes',
            unit_amount: {
              currency_code: 'USD',
              value: '50.00',
            },
            quantity: '1',
          },
        ],
      },
    ],
  })

  const response = await client.execute(request)

  return NextResponse.json({
    id: response.result.id,
  })
}
