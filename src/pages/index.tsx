import React from 'react'
import { IndexPageQuery } from '../types/graphql'

export interface Props {
  data: IndexPageQuery
}

interface SubProps {
  title: string
  slug: string
  date: string
}

const IndexPageItem: React.SFC<SubProps> = ({ title, slug, date }) => (
  <div>
    {title} {slug} {date}
  </div>
)

const IndexPage: React.SFC<Props> = ({ data }) =>
  data.allMarkdownRemark &&
  data.allMarkdownRemark.edges && (
    <div>
      {data.allMarkdownRemark.edges.map(
        e =>
          e &&
          e.node &&
          e.node.frontmatter &&
          e.node.fields &&
          e.node.frontmatter.title &&
          e.node.fields.slug &&
          e.node.frontmatter.date && (
            <IndexPageItem
              key={e.node.fields.slug}
              title={e.node.frontmatter.title}
              slug={e.node.fields.slug}
              date={e.node.frontmatter.date}
            />
          )
      )}
    </div>
  )

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
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
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
