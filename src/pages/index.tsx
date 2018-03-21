import React from 'react'
import rehypeReact from 'rehype-react'
import { IndexPageQuery } from './__generated__/IndexPageQuery'

const CustomParagraphTag: React.SFC<React.ReactNode> = ({ children }) => (
  <div style={{ color: 'red' }}>{children}</div>
)

type renderAstType = (htmlAst: JSON) => string

const renderAst: renderAstType = new rehypeReact({
  components: { p: CustomParagraphTag },
  createElement: React.createElement,
}).Compiler

export interface Props {
  data: IndexPageQuery
}

interface SubProps {
  title: string
  slug: string
  date: Date
  htmlAst: JSON
}

const IndexPageItem: React.SFC<SubProps> = ({ title, slug, date, htmlAst }) => (
  <div>
    {title} {slug} {date} {renderAst(htmlAst)}
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
          e.node.frontmatter.date &&
          e.node.htmlAst && (
            <IndexPageItem
              key={e.node.fields.slug}
              title={e.node.frontmatter.title}
              slug={e.node.fields.slug}
              date={e.node.frontmatter.date}
              htmlAst={e.node.htmlAst}
            />
          )
      )}
    </div>
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
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
