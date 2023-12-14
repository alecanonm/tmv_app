import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { vapesToStripeOrderMapper } from './mapper'
import { STRIPE_SECRET_KEY } from './constants'

const stripe = new Stripe(STRIPE_SECRET_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const stripeTax = await stripe.taxRates.create({
      display_name: 'Stripe Tax',
      inclusive: false,
      percentage: 2.9,
      description: 'Impuesto de Stripe',
      country: 'ES',
    })
    const stripeVapes = vapesToStripeOrderMapper(body.vapesToBox, stripeTax.id)
    const session = await stripe.checkout.sessions.create(stripeVapes)
    return NextResponse.json(session)
  } catch (err) {
    return NextResponse.json(err.message)
  }
}
