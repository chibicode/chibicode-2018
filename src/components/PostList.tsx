import debounce from 'lodash/debounce'
import React from 'react'
import Post from '../components/Post'
import { IndexPageQuery_allMarkdownRemark } from '../types/IndexPageQuery'

interface Props {
  allMarkdownRemark: IndexPageQuery_allMarkdownRemark
  exceptSlug?: string | null
}

interface CustomWindow extends Window {
  postsToShow: number
}

declare let window: CustomWindow

const POST_CHUNKS = 10
const BOTTOM_THRESHOLD = 500

// https://github.com/gatsbyjs/gatsby/blob/dee8c7b64ad15e38f693b2163c68096911385c43/examples/gatsbygram/src/pages/index.js#L10
if (typeof window !== `undefined`) {
  window.postsToShow = POST_CHUNKS
}

interface State {
  postsToShow: number
}

export default class PostList extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    let postsToShow = POST_CHUNKS
    if (typeof window !== `undefined`) {
      postsToShow = window.postsToShow
    }

    this.state = {
      postsToShow,
    }
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScrollDebounced)
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollDebounced)
    window.postsToShow = this.state.postsToShow
  }

  private handleScroll = () => {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (distanceToBottom < BOTTOM_THRESHOLD) {
      this.setState({ postsToShow: this.state.postsToShow + POST_CHUNKS })
    }
  }

  private handleScrollDebounced = debounce(this.handleScroll, 100)

  public render() {
    const { allMarkdownRemark, exceptSlug } = this.props
    const { postsToShow } = this.state
    return (
      <div>
        {allMarkdownRemark!
          .edges!.slice(0, postsToShow)
          .map(
            e =>
              exceptSlug !== e!.node!.fields!.slug! &&
              !e!.node!.frontmatter!.draft && (
                <Post
                  key={e!.node!.fields!.slug!}
                  title={e!.node!.frontmatter!.title!}
                  slug={e!.node!.fields!.slug!}
                  date={e!.node!.frontmatter!.date!}
                  htmlAst={e!.node!.htmlAst!}
                  image={
                    e!.node!.frontmatter!.image &&
                    e!.node!.frontmatter!.image!.childImageSharp!.width1000
                  }
                  imageAttributionName={
                    e!.node!.frontmatter!.imageAttributionName
                  }
                  imageAttributionUrl={
                    e!.node!.frontmatter!.imageAttributionUrl
                  }
                  isMainArticleOnPostPage={false}
                  twitterId={e!.node!.frontmatter!.twitterId}
                  numWords={e!.node!.wordCount!.words!}
                />
              )
          )}
      </div>
    )
  }
}
