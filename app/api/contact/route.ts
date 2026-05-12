import { Resend } from 'resend'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('[contact] API route hit')
  console.log('[contact] RESEND_API_KEY present:', !!process.env.RESEND_API_KEY)

  try {
    const body = await request.json()
    const { name, email, topic, message } = body
    console.log('[contact] Received:', { name, email, topic, messageLength: message?.length })

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const result = await resend.emails.send({
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

    console.log('[contact] Resend result:', JSON.stringify(result))

    if (result.error) {
      console.error('[contact] Resend error:', JSON.stringify(result.error))
      return Response.json({ error: 'Failed to send email' }, { status: 500 })
    }

    console.log('[contact] Email sent successfully, id:', result.data?.id)
    return Response.json({ success: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err instanceof Error ? err.message : JSON.stringify(err))
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
