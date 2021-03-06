import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import ogImage from '../images/og-image.jpg'
import { IndexPageQuery } from '../types/IndexPageQuery'

interface Props {
  data: IndexPageQuery
  location: Location
}

const IndexPage: React.SFC<Props> = ({ data, location }) => (
  <Layout location={location}>
    <main>
      <Helmet title={data!.site!.siteMetadata!.title!}>
        <meta property="og:title" content={data!.site!.siteMetadata!.title!} />
        <meta
          property="og:description"
          content={data!.site!.siteMetadata!.description!}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data!.site!.siteMetadata!.siteUrl!} />
        <meta
          property="og:image"
          content={`${data!.site!.siteMetadata!.siteUrl!}${ogImage}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <PostList allMarkdownRemark={data!.allMarkdownRemark!} />
    </main>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
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
          htmlAst
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            draft
            title
            tags
            imageAttributionName
            imageAttributionUrl
            twitterId
            image {
              childImageSharp {
                width1200: fixed(width: 1200, quality: 80) {
                  height
                  src
                  width
                }
                width1000: fluid(maxWidth: 1000, quality: 80) {
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
