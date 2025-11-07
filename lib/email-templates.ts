import fs from 'fs'
import path from 'path'
import HandleBars from 'handlebars'

function loadTemplate(filename: string) {
  const file = path.join(process.cwd(), 'emails', filename)
  const source = fs.readFileSync(file, 'utf-8')
  return HandleBars.compile(source)
}

const resetPasswordTemplate = loadTemplate('reset-password.hbs')

export function renderResetPassword(context: { name?: string; resetUrl: string }) {
  const subject = 'Reset your password'
  const html = resetPasswordTemplate(context)
  const text = `Hi ${context.name || ''},\nReset: ${context.resetUrl}`
  return { subject, html, text }
}
