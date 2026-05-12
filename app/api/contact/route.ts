import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { name, email, topic, message } = await request.json()

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Prizma Contact Form <onboarding@resend.dev>',
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
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return Response.json({ success: true })
}
