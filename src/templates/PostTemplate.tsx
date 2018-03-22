import React from 'react'
import Helmet from 'react-helmet'
import Post from '../components/Post'
import { PostBySlugQuery } from './__generated__/PostBySlugQuery'

interface Props {
  data: PostBySlugQuery
  pathContext?: object
}

const PostTemplate: React.SFC<Props> = ({ data }) => (
  <div>
    <Helmet
      title={`${data!.markdownRemark!.frontmatter!.title} | ${
        data!.site!.siteMetadata!.title
      }`}
    >
      {data!.markdownRemark!.frontmatter!.image && (
        <meta
          property="og:image"
          content={`${
            data!.site!.siteMetadata!.siteUrl
          }${data!.markdownRemark!.frontmatter!.image!.childImageSharp!.resolutions!.src!.substring(
            1
          )}`}
        />
      )}
    </Helmet>
    <Post
      title={data!.markdownRemark!.frontmatter!.title!}
      slug={data!.markdownRemark!.fields!.slug!}
      date={data!.markdownRemark!.frontmatter!.date!}
      htmlAst={data!.markdownRemark!.htmlAst!}
    />
  </div>
)

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlugQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            resolutions(width: 1200) {
              height
              src
              width
            }
          }
        }
      }
    }
  }
`
