import { z } from 'zod'
import { EMAIL_PATTERN } from '../patterns'

export const profileSchema = z.object({
  username: z.string('Username is required'),
  email: z.string('Email is required.').regex(EMAIL_PATTERN, 'Invalid email address'),
  first_name: z.string('First Name is required.'),
})
