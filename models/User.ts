import { IUserDocument } from '@/types/user'
import { Model, Schema, model, models } from 'mongoose'

const userSchema = new Schema<IUserDocument>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
)

const User: Model<IUserDocument> = models.User
  ? (models.User as Model<IUserDocument>)
  : model<IUserDocument>('User', userSchema)
export default User
