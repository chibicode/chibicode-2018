import React from 'react'
import Helmet from 'react-helmet'
import Post from '../components/Post'
import ogImage from '../images/og-image.jpg'
import { IndexPageQuery } from './__generated__/IndexPageQuery'

export interface Props {
  data: IndexPageQuery
}

const IndexPage: React.SFC<Props> = ({ data }) => (
  <main>
    <Helmet title={data!.site!.siteMetadata!.title!}>
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
    {data!.allMarkdownRemark!.edges!.map(e => (
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
      />
    ))}
  </main>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          htmlAst
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            imageAttributionName
            imageAttributionUrl
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
