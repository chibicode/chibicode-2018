import React from 'react'
import Helmet from 'react-helmet'
import Post from '../components/Post'
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
    data.markdownRemark.fields &&
    data.markdownRemark.fields.slug &&
    data.markdownRemark.htmlAst && (
      <div>
        <Helmet
          title={`${data.markdownRemark.frontmatter.title} | ${
            data.site.siteMetadata.title
          }`}
        />
        <Post
          title={data.markdownRemark.frontmatter.title}
          slug={data.markdownRemark.fields.slug}
          date={data.markdownRemark.frontmatter.date}
          htmlAst={data.markdownRemark.htmlAst}
        />
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
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
