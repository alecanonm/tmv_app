import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { vapesToStripeOrderMapper } from './mapper'
import { STRIPE_SECRET_KEY } from './constants'

const stripe = new Stripe(STRIPE_SECRET_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const stripeVapes = vapesToStripeOrderMapper(body.vapesToBox)
    const session = await stripe.checkout.sessions.create(stripeVapes)
    return NextResponse.json(session)
  } catch (err) {
    return NextResponse.json(err.message)
  }
}
