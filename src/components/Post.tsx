import GatsbyImage from 'gatsby-image'
import React from 'react'
import Block, { BlockBottomSpacing, BlockWidth } from '../components/Block'
import { H1Tag, BlockTag } from '../components/BlockElements'
import { ATag, NoUnderlineLink } from '../components/InlineElements'
import PostContent from '../components/PostContent'
import PostTopBorder from '../components/PostTopBorder'

interface Props {
  title: string
  slug: string
  date: string
  htmlAst: JSON
  image: object | null
  imageAttributionName: string | null
  imageAttributionUrl: string | null
  isMainArticleOnPostPage: boolean
  twitterId: string | null
  numWords: number
}

const Post: React.SFC<Props> = ({
  title,
  slug,
  date,
  htmlAst,
  image,
  imageAttributionName,
  imageAttributionUrl,
  isMainArticleOnPostPage,
  twitterId,
  numWords,
}) => (
  <article className="pt4-ns pt3 pb5-ns pb4">
    <BlockTag reactType={'div'} bottomSpacing={BlockBottomSpacing.XSmall}>
      <PostTopBorder isRed={isMainArticleOnPostPage} />
      <time className="f6">{date}</time>
    </BlockTag>
    <H1Tag className="pb2">
      <NoUnderlineLink to={slug}>{title}</NoUnderlineLink>
    </H1Tag>
    {image && (
      <Block
        reactType={'div'}
        bottomSpacing={BlockBottomSpacing.Small}
        width={BlockWidth.Small}
      >
        <figure className="mv0 nl3 nr3 nl4-ns nr4-ns">
          <GatsbyImage sizes={image} alt="Cover Image" className="db" />
          {imageAttributionName && (
            <div className="mt2 mh3 mh4-ns">
              <BlockTag reactType={'figcaption'} className="silver f7">
                Image by{' '}
                {imageAttributionUrl ? (
                  <ATag href={imageAttributionUrl}>{imageAttributionName}</ATag>
                ) : (
                  imageAttributionName
                )}
              </BlockTag>
            </div>
          )}
        </figure>
      </Block>
    )}
    <div className="pt2">
      <PostContent
        htmlAst={htmlAst}
        twitterId={twitterId}
        slug={slug}
        expanded={isMainArticleOnPostPage}
        numWords={numWords}
      />
    </div>
  </article>
)

export default Post
