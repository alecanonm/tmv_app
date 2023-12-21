import EmailTemplate from '@components/templates/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const order = body.order
    const orderId = order.id
    const email = order.payer.email_address
    const fullName = `${order.payer.name.given_name} ${order.payer.name.surname}`
    const items = order.purchase_units[0].items
    const total = order.purchase_units[0].amount.value

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['al3jandrocan0n@gmail.com', email],
      subject: 'TAKE MY VAPE',
      react: EmailTemplate({ orderId, fullName, items, total }),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
