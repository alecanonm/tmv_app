import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'

const clientID = process.env.PAYPAL_CLIENT_ID

const clientSecret = process.env.PAYPAL_CLIENT_SECRET

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
            name: 'vape muss marmol',
            description: 'vape muss marmol',
            quantity: '1',
            unit_amount: {
              currency_code: 'USD',
              value: '100.00',
            },
          },
          {
            name: 'vape muss marmol',
            description: 'vape muss marmol',
            quantity: '1',
            unit_amount: {
              currency_code: 'USD',
              value: '100.00',
            },
          },
        ],
      },
    ],
  })

  const response = await client.execute(request)
  console.log(response)
  return NextResponse.json({
    id: response.result.id,
  })
}
