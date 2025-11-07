import { Types } from 'mongoose'

export interface IUserDocument extends Document {
  _id: Types.ObjectId
  username: string
  email: string
  password: string
  first_name: string
  last_name: string
  role: string
  resetPasswordToken: string
  resetPasswordExpires: Date
}

export interface IUserProfile {
  email: string
  username: string
  first_name: string
  last_name: string
  role: string
}
