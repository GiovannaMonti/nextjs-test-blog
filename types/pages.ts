type HTMLContent = {
  rendered: string
  protected?: boolean
}

export type Params = {
  id: string
}

export type PostParams = {
  params: Params
}

export type Post = {
  id: number
  date: string
  date_gmt: string
  guid: HTMLContent
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: HTMLContent
  content: HTMLContent
  excerpt: HTMLContent
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: []
  categories: number[]
  tags: number[]
  _links: any
}
