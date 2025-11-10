import nodemailer from 'nodemailer'

interface ISendMailOptions {
  to: string
  subject: string
  html?: string
  text?: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendEmail({ to, subject, html, text }: ISendMailOptions) {
  const from = process.env.EMAIL_FROM || `no-reply@unknown.com`
  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
    text,
  })
  return info
}
