import GatsbyImage from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import Block, { BlockVSpacing, BlockWidth } from '../components/Block'
import { H1Tag, StandardTag } from '../components/BlockElements'
import { ATag, NoUnderlineLink } from '../components/InlineElements'
import { COLOR_BLACK, COLOR_YELLOW } from '../constants/styles'
import renderAst from '../lib/renderAst'

interface Props {
  title: string
  slug: string
  date: string
  htmlAst: JSON
  image: object | null
  imageAttributionName: string | null
  imageAttributionUrl: string | null
}

const PostTopBorder = styled.div`
  border-top: 2px solid ${COLOR_BLACK};
  background: ${COLOR_YELLOW};
`

const Post: React.SFC<Props> = ({
  title,
  slug,
  date,
  htmlAst,
  image,
  imageAttributionName,
  imageAttributionUrl,
}) => (
  <article className="pt4-ns pt3 pb5-ns pb4">
    <StandardTag reactType={'div'} vSpacing={BlockVSpacing.XSmall}>
      <PostTopBorder className="pt2 mb3 nl3 nr3 nl4-ns nr4-ns" />
      <time className="f6">{date}</time>
    </StandardTag>
    <H1Tag>
      <NoUnderlineLink to={slug}>{title}</NoUnderlineLink>
    </H1Tag>
    {image && (
      <Block
        reactType={'div'}
        vSpacing={BlockVSpacing.Small}
        width={BlockWidth.Small}
      >
        <figure className="mv0 nl3 nr3 nl4-ns nr4-ns">
          <GatsbyImage sizes={image} alt="Cover Image" className="db" />
          {imageAttributionName && (
            <div className="mt2 mh3 mh4-ns">
              <StandardTag reactType={'figcaption'} className="silver f7">
                Image by{' '}
                {imageAttributionUrl ? (
                  <ATag href={imageAttributionUrl}>{imageAttributionName}</ATag>
                ) : (
                  imageAttributionName
                )}
              </StandardTag>
            </div>
          )}
        </figure>
      </Block>
    )}
    {renderAst(htmlAst)}
  </article>
)

export default Post
