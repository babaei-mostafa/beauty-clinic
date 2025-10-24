import { z } from 'zod'

import { EMAIL_PATTERN } from '@/lib/patterns'

export const singupSchema = z
  .object({
    first_name: z.string('First Name is required.'),
    last_name: z.string('Last Name is required.'),
    username: z.string('Username is required.'),
    email: z.string('Email is required.').regex(EMAIL_PATTERN, 'Invalid email address'),
    password: z.string('Password is required.'),
    confirm_password: z.string('Confirm password is required.'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match.',
    path: ['confirm_password'],
  })

export const loginSchema = z.object({
  email: z.string('Email is required.').regex(EMAIL_PATTERN, 'Invalid email address'),
  password: z.string('Password is required.'),
})
