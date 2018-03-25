import React from 'react'
import Post from '../components/Post'
import { IndexPageQuery_allMarkdownRemark } from '../pages/__generated__/IndexPageQuery'

interface Props {
  allMarkdownRemark: IndexPageQuery_allMarkdownRemark
  exceptSlug?: string | null
}

const PostList: React.SFC<Props> = ({ allMarkdownRemark, exceptSlug }) => (
  <div>
    {allMarkdownRemark!.edges!.map(
      e =>
        exceptSlug !== e!.node!.fields!.slug! && (
          <Post
            key={e!.node!.fields!.slug!}
            title={e!.node!.frontmatter!.title!}
            slug={e!.node!.fields!.slug!}
            date={e!.node!.frontmatter!.date!}
            htmlAst={e!.node!.htmlAst!}
            image={
              e!.node!.frontmatter!.image &&
              e!.node!.frontmatter!.image!.childImageSharp!.width750
            }
            imageAttributionName={e!.node!.frontmatter!.imageAttributionName}
            imageAttributionUrl={e!.node!.frontmatter!.imageAttributionUrl}
            isMainArticleOnPostPage={false}
            twitterId={e!.node!.frontmatter!.twitterId}
            numWords={e!.node!.wordCount!.words!}
          />
        )
    )}
  </div>
)

export default PostList
