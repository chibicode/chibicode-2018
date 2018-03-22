import React from 'react'
import Post from '../components/Post'
import { IndexPageQuery } from './__generated__/IndexPageQuery'

export interface Props {
  data: IndexPageQuery
}

const IndexPage: React.SFC<Props> = ({ data }) =>
  (data.allMarkdownRemark &&
    data.allMarkdownRemark.edges && (
      <main>
        {data.allMarkdownRemark.edges.map(
          e =>
            e &&
            e.node &&
            e.node.frontmatter &&
            e.node.fields &&
            e.node.frontmatter.title &&
            e.node.fields.slug &&
            e.node.frontmatter.date &&
            e.node.htmlAst && (
              <Post
                key={e.node.fields.slug}
                title={e.node.frontmatter.title}
                slug={e.node.fields.slug}
                date={e.node.frontmatter.date}
                htmlAst={e.node.htmlAst}
              />
            )
        )}
      </main>
    )) || <div />

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
          }
        }
      }
    }
  }
`
