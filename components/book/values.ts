import { IBookReq } from '@/types/book'

export const bookInitialValues: IBookReq = {
  fullname: '',
  phone: '',
  email: '',
  contact_method: '',
  service_type: '',
  specialist: '',
  date: '',
  time: '',
  duration: '',
  referral_source: '',
  is_allergy: false,
  allergy: '',
  note: '',
  payment_method: '', 
  terms: false,
}
