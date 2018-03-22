import React from 'react'
import styled from 'styled-components'
import { BlockVSpacing } from '../components/Block'
import { H1Tag, StandardTag } from '../components/MarkdownTags'
import UnderlineOnHoverLink from '../components/UnderlineOnHoverLink'
import { COLOR_BLACK, COLOR_YELLOW } from '../constants/styles'
import renderAst from '../lib/renderAst'

interface Props {
  title: string
  slug: string
  date: Date
  htmlAst: JSON
}

const PostTopBorder = styled.div`
  border-top: 2px solid ${COLOR_BLACK};
  background: ${COLOR_YELLOW};
`

const Post: React.SFC<Props> = ({ title, slug, date, htmlAst }) => (
  <article className="pv4-ns pv3">
    <StandardTag reactType={'div'} vSpacing={BlockVSpacing.XSmall}>
      <PostTopBorder className="pt2 mb3 nl3 nr3 nl4-ns nr4-ns" />
      <time className="f6">{date}</time>
    </StandardTag>
    <H1Tag>
      <UnderlineOnHoverLink isLink to={slug}>
        {title}
      </UnderlineOnHoverLink>
    </H1Tag>
    {renderAst(htmlAst)}
  </article>
)

export default Post
