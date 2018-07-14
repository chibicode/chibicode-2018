import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import PageHeader, { PageHeaderLocation } from '../components/PageHeader'
import Post from '../components/Post'
import PostList from '../components/PostList'
import getRelatedPostsData from '../lib/getRelatedPostsData'
import { PostBySlugQuery } from '../types/PostBySlugQuery'

interface Props {
  data: PostBySlugQuery
  location: Location
}

const PostTemplate: React.SFC<Props> = ({ data, location }) =>
  data!.markdownRemark && (
    <Layout location={location}>
      <Helmet
        title={`${data!.markdownRemark!.frontmatter!.title!} | ${data!.site!
          .siteMetadata!.title!}`}
      >
        {/* Do not include site title on og:title */}
        <meta
          property="og:title"
          content={data!.markdownRemark!.frontmatter!.title!}
        />
        <meta name="article:author" content={'Shu Uesugi'} />
        <meta name="article:publisher" content={'Shu Uesugi'} />
        <meta name="author" content={'Shu Uesugi'} />
        <meta
          name="article:published_time"
          content={new Date(
            data!.markdownRemark!.frontmatter!.dateRaw!
          ).toISOString()}
        />
        <meta property="description" content={data!.markdownRemark!.excerpt!} />
        <meta
          property="og:description"
          content={data!.markdownRemark!.excerpt!}
        />
        <meta
          name="twitter:description"
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
            content={`${data!.site!.siteMetadata!.siteUrl!}${data!
              .markdownRemark!.frontmatter!.image!.childImageSharp!.width1200!
              .src!}`}
          />
        )}
        {data!.markdownRemark!.frontmatter!.image && (
          <meta
            property="og:image:width"
            content={`${data!.markdownRemark!.frontmatter!.image!
              .childImageSharp!.width1200!.width!}`}
          />
        )}
        {data!.markdownRemark!.frontmatter!.image && (
          <meta
            property="og:image:height"
            content={`${data!.markdownRemark!.frontmatter!.image!
              .childImageSharp!.width1200!.height!}`}
          />
        )}
        )}
      </Helmet>
      <Post
        title={data!.markdownRemark!.frontmatter!.title!}
        slug={data!.markdownRemark!.fields!.slug!}
        date={data!.markdownRemark!.frontmatter!.date!}
        draft={data!.markdownRemark!.frontmatter!.draft}
        htmlAst={data!.markdownRemark!.htmlAst!}
        relatedPostsData={getRelatedPostsData({
          node: data!.markdownRemark!,
          allMarkdowwnRemark: data!.allMarkdownRemark!,
        })}
        image={
          data!.markdownRemark!.frontmatter!.image &&
          data!.markdownRemark!.frontmatter!.image!.childImageSharp!.width1000
        }
        imageAttributionName={
          data!.markdownRemark!.frontmatter!.imageAttributionName
        }
        imageAttributionUrl={
          data!.markdownRemark!.frontmatter!.imageAttributionUrl
        }
        isMainArticleOnPostPage
        twitterId={data!.markdownRemark!.frontmatter!.twitterId}
      />
      <div className="pt6-ns pt5">
        <PageHeader location={PageHeaderLocation.PostPageSecondary} />
        <PostList
          exceptSlug={data!.markdownRemark!.fields!.slug!}
          allMarkdownRemark={data!.allMarkdownRemark!}
        />
      </div>
    </Layout>
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
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            draft
            tags
            imageAttributionName
            imageAttributionUrl
            twitterId
            image {
              childImageSharp {
                width1200: fixed(width: 1200, quality: 80) {
                  height
                  src
                  width
                }
                width1000: fluid(maxWidth: 1000, quality: 80) {
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateRaw: date
        imageAttributionName
        imageAttributionUrl
        twitterId
        draft
        tags
        image {
          childImageSharp {
            width1200: fixed(width: 1200, quality: 80) {
              height
              src
              width
            }
            width1000: fluid(maxWidth: 1000, quality: 80) {
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
