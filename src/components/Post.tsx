import React from 'react'
import renderAst from '../lib/renderAst'

interface Props {
  title: string
  slug: string
  date: Date
  htmlAst: JSON
}

const Post: React.SFC<Props> = ({ title, slug, date, htmlAst }) => (
  <div>
    {title} {slug} {date} {renderAst(htmlAst)}
  </div>
)

export default Post
