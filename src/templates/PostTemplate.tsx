import React from 'react'
import Helmet from 'react-helmet'
import { PostBySlugQuery } from './__generated__/PostBySlugQuery'

interface Props {
  data: PostBySlugQuery
  pathContext?: object
}

const PostTemplate: React.SFC<Props> = ({ data }) =>
  (data.site &&
    data.site.siteMetadata &&
    data.site.siteMetadata.title &&
    data.markdownRemark &&
    data.markdownRemark.frontmatter &&
    data.markdownRemark.frontmatter.title &&
    data.markdownRemark.frontmatter.date &&
    data.markdownRemark.html && (
      <div>
        <Helmet
          title={`${data.markdownRemark.frontmatter.title} | ${
            data.site.siteMetadata.title
          }`}
        />
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <hr />
      </div>
    )) || <div />

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlugQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
