import { NextResponse } from 'next/server'
import { vapesToStripeOrderMapper } from './mapper'

export async function POST(req) {
  const body = await req.json()
  const stripeVapes = vapesToStripeOrderMapper(body.vapesToBox)

  console.log({ stripeVapes })

  return NextResponse.json(stripeVapes)
}
