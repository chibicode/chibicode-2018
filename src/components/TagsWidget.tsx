import React from 'react'
import { H2Tag, LiTag, UlTag } from '../components/BlockElements'
import { UnderlineLink } from '../components/InlineElements'
import { RelatedPostData } from '../lib/getRelatedPostsData'

interface Props {
  relatedPostsData: RelatedPostData
}

const TagsWidget: React.SFC<Props> = ({ relatedPostsData }) => (
  <div>
    {relatedPostsData.map(({ tag, posts }) => (
      <div>
        <H2Tag>More from {tag}</H2Tag>
        <UlTag>
          {posts.map(post => (
            <LiTag>
              <UnderlineLink to={post.slug}>{post.title}</UnderlineLink>
            </LiTag>
          ))}
        </UlTag>
      </div>
    ))}
  </div>
)

export default TagsWidget
