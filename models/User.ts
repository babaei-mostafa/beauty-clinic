import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
  },
  { timestamps: true }
)

const User = models.User || model('User', userSchema)
export default User
