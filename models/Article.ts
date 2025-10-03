import { Schema, model, models } from 'mongoose'

const articleSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true },
    short_description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
  },
  { timestamps: true }
)

const Article = models.Article || model('Article', articleSchema)

export default Article
