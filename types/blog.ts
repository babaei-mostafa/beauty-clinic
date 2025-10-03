export interface IArticle {
  id: string
  title: string
  image: string
  short_description: string
  date: string
}

export interface IArticleReq {
  title: string
  body: string
  short_description: string
  author?: string
  slug: string
  tags?: string[]
}