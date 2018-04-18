import {
  IndexPageQuery_allMarkdownRemark,
  IndexPageQuery_allMarkdownRemark_edges_node,
} from '../types/IndexPageQuery'

interface RelatedPostsProps {
  node: IndexPageQuery_allMarkdownRemark_edges_node
  allMarkdowwnRemark: IndexPageQuery_allMarkdownRemark
}

export type RelatedPostData = Array<{
  tag: string
  posts: Array<{
    title: string
    slug: string
  }>
}>

const getRelatedPostsData = ({
  node,
  allMarkdowwnRemark,
}: RelatedPostsProps): RelatedPostData =>
  node.frontmatter!.tags && node.frontmatter!.tags!.length
    ? node
        .frontmatter!.tags!.map(tag => ({
          tag: tag!,
          posts: allMarkdowwnRemark
            .edges!.filter(
              e =>
                node.fields!.slug! !== e!.node!.fields!.slug! &&
                (process.env.NODE_ENV === 'development' ||
                  !e!.node!.frontmatter!.draft) &&
                e!.node!.frontmatter!.tags &&
                e!.node!.frontmatter!.tags!.length &&
                e!.node!.frontmatter!.tags!.includes(tag)
            )
            .map(e => ({
              title: e!.node!.frontmatter!.title!,
              slug: e!.node!.fields!.slug!,
            })),
        }))
        .filter(({ posts }) => posts.length)
    : []

export default getRelatedPostsData
