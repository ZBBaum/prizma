import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  console.log('[contact] API route hit')

  const { name, email, topic, message } = await request.json()

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: 'Prizma Contact Form <hello@prizmatech.co>',
    to: 'hello@prizmatech.co',
    replyTo: email,
    subject: `New Prizma inquiry from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Topic:</strong> ${topic || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  })

  if (error) {
    console.error('[contact] Resend error:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }

  console.log('[contact] Email sent:', data?.id)
  return Response.json({ success: true })
}
