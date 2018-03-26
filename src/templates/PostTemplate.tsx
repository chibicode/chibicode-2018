import React from 'react'
import Helmet from 'react-helmet'
import PageHeader, { PageHeaderLocation } from '../components/PageHeader'
import Post from '../components/Post'
import PostList from '../components/PostList'
import { PostBySlugQuery } from '../types/PostBySlugQuery'

interface Props {
  data: PostBySlugQuery
  pathContext?: object
}

const PostTemplate: React.SFC<Props> = ({ data }) => (
  <div>
    <Helmet
      title={`${data!.markdownRemark!.frontmatter!.title!} | ${data!.site!
        .siteMetadata!.title!}`}
    >
      {/* Do not include site title on og:title */}
      <meta
        property="og:title"
        content={data!.markdownRemark!.frontmatter!.title!}
      />
      <meta
        property="og:description"
        content={data!.markdownRemark!.excerpt!}
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`${data!.site!.siteMetadata!.siteUrl!}${data!.markdownRemark!
          .fields!.slug!}`}
      />
      {data!.markdownRemark!.frontmatter!.image && (
        <meta
          property="og:image"
          content={`${data!.site!.siteMetadata!
            .siteUrl!}${data!.markdownRemark!.frontmatter!.image!.childImageSharp!.width1200!.src!.substring(
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
      isMainArticleOnPostPage
      twitterId={data!.markdownRemark!.frontmatter!.twitterId}
      numWords={data!.markdownRemark!.wordCount!.words!}
    />
    <div className="pt6-ns pt5">
      <PageHeader location={PageHeaderLocation.PostPageSecondary} />
      <PostList
        exceptSlug={data!.markdownRemark!.fields!.slug!}
        allMarkdownRemark={data!.allMarkdownRemark!}
      />
    </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          htmlAst
          excerpt
          wordCount {
            words
          }
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            draft
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
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      excerpt
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        imageAttributionName
        imageAttributionUrl
        twitterId
        draft
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
