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
          }${data!.markdownRemark!.frontmatter!.image!.childImageSharp!.width1200!.src!.substring(
            1
          )}`}
        />
      )}
      {data!.markdownRemark!.frontmatter!.image && (
        <meta
          property="og:image:width"
          content={`${data!.markdownRemark!.frontmatter!.image!.childImageSharp!
            .width1200!.width!}`}
        />
      )}
      {data!.markdownRemark!.frontmatter!.image && (
        <meta
          property="og:image:height"
          content={`${data!.markdownRemark!.frontmatter!.image!.childImageSharp!
            .width1200!.height!}`}
        />
      )}
      )}
    </Helmet>
    <Post
      title={data!.markdownRemark!.frontmatter!.title!}
      slug={data!.markdownRemark!.fields!.slug!}
      date={data!.markdownRemark!.frontmatter!.date!}
      htmlAst={data!.markdownRemark!.htmlAst!}
      image={
        data!.markdownRemark!.frontmatter!.image &&
        data!.markdownRemark!.frontmatter!.image!.childImageSharp!.width750
      }
      imageAttributionName={
        data!.markdownRemark!.frontmatter!.imageAttributionName
      }
      imageAttributionUrl={
        data!.markdownRemark!.frontmatter!.imageAttributionUrl
      }
      isPostPage
      twitterId={data!.markdownRemark!.frontmatter!.twitterId}
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
`
