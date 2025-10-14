import { z } from 'zod'

// Step 1: Personal Info
export const personalInfoSchema = z.object({
  fullname: z
    .string()
    .nonempty('Full name is required.')
    .min(2, 'Full name is required.'),
  phone: z
    .string() 
    .nonempty('Phone is required.')
    .min(5, 'Phone number is required'),
  email: z.string().email('Invalid email'),
  contact_method: z.string().nonempty('Please select a contact method'),
})

// Step 2: Appointment Details
export const appointmentSchema = z.object({
  service_type: z.string().nonempty('Please select a service'),
  date: z.string().nonempty('Please pick a date'),
  time: z.string().nonempty('Please choose a time'),
})

// Step 3: Additional Info
export const additionalInfoSchema = z.object({
  notes: z.string().optional(),
})

// Step 4: Payment
export const paymentSchema = z.object({
  payment_method: z.string().nonempty('Please select a payment method'),
  terms: z.boolean().refine((val) => val, 'You must accept the terms'),
})

export const stepSchemas = [
  personalInfoSchema,
  appointmentSchema,
  additionalInfoSchema,
  paymentSchema,
]
