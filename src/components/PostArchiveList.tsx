import React from 'react'
import { BlockBottomSpacing } from '../components/Block'
import { H1Tag, LiTag, OlTag } from '../components/BlockElements'
import { NoUnderlineLink } from '../components/InlineElements'
import { PostsPageQuery_allMarkdownRemark } from '../types/PostsPageQuery'

interface Props {
  allMarkdownRemark: PostsPageQuery_allMarkdownRemark
}

const PostArchiveList: React.SFC<Props> = ({ allMarkdownRemark }) => (
  <div className="pt4-ns pt3 pb5">
    <H1Tag>Archive</H1Tag>
    <OlTag reversed>
      {allMarkdownRemark!.edges!.map(
        e =>
          !e!.node!.frontmatter!.draft && (
            <LiTag bottomSpacing={BlockBottomSpacing.Medium}>
              <NoUnderlineLink to={e!.node!.fields!.slug!} className="b">
                {e!.node!.frontmatter!.title!}
              </NoUnderlineLink>
              <br />
              <time className="f6">{e!.node!.frontmatter!.date!}</time>
            </LiTag>
          )
      )}
    </OlTag>
  </div>
)

export default PostArchiveList
