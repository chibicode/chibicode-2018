import React from 'react'
import Helmet from 'react-helmet'
import PostArchiveList from '../components/PostArchiveList'
import ogImage from '../images/og-image.jpg'
import { PostsPageQuery } from '../types/PostsPageQuery'

interface Props {
  data: PostsPageQuery
}

const PostsPage: React.SFC<Props> = ({ data }) => (
  <main>
    <Helmet title={`Archive | ${data!.site!.siteMetadata!.title!}`}>
      <meta property="og:title" content={'Archive'} />
      <meta
        property="og:description"
        content={data!.site!.siteMetadata!.description!}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${data!.site!.siteMetadata!.siteUrl!}posts`}
      />
      <meta
        property="og:image"
        content={`${data!.site!.siteMetadata!.siteUrl!}${ogImage}`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
    <PostArchiveList allMarkdownRemark={data!.allMarkdownRemark!} />
  </main>
)

export default PostsPage

export const pageQuery = graphql`
  query PostsPageQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            draft
            title
          }
        }
      }
    }
  }
`
