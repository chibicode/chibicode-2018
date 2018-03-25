import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../components/PostList'
import ogImage from '../images/og-image.jpg'
import { IndexPageQuery } from '../pages/__generated__/IndexPageQuery'

interface Props {
  data: IndexPageQuery
}

const IndexPage: React.SFC<Props> = ({ data }) => (
  <main>
    <Helmet title={data!.site!.siteMetadata!.title!}>
      <meta property="og:title" content={data!.site!.siteMetadata!.title!} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data!.site!.siteMetadata!.siteUrl!} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
    <PostList allMarkdownRemark={data!.allMarkdownRemark!} />
  </main>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          htmlAst
          excerpt
          wordCount {
            words
          }
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            imageAttributionName
            imageAttributionUrl
            twitterId
            image {
              childImageSharp {
                width1200: resolutions(width: 1200) {
                  height
                  src
                  width
                }
                width750: sizes(maxWidth: 750) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
