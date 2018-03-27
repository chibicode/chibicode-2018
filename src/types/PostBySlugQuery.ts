

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostBySlugQuery
// ====================================================

export interface PostBySlugQuery_site_siteMetadata {
  __typename: "siteMetadata_2";
  title: string | null;
  author: string | null;
  siteUrl: string | null;
}

export interface PostBySlugQuery_site {
  __typename: "Site";
  siteMetadata: PostBySlugQuery_site_siteMetadata | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_wordCount {
  __typename: "wordCount";
  words: number | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_fields {
  __typename: "fields_2";
  slug: string | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1200 {
  __typename: "ImageSharpResolutions";
  height: number | null;
  src: string | null;
  width: number | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width750 {
  __typename: "ImageSharpSizes";
  aspectRatio: number | null;
  base64: string | null;
  sizes: string | null;
  src: string | null;
  srcSet: string | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp {
  __typename: "ImageSharp";
  width1200: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1200 | null;
  width750: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width750 | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image {
  __typename: "File";
  childImageSharp: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp | null;  // The child of this node of type imageSharp
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "frontmatter_2";
  date: string | null;
  title: string | null;
  draft: boolean | null;
  imageAttributionName: string | null;
  imageAttributionUrl: string | null;
  twitterId: string | null;
  image: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  htmlAst: JSON | null;
  excerpt: string | null;
  wordCount: PostBySlugQuery_allMarkdownRemark_edges_node_wordCount | null;
  fields: PostBySlugQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: PostBySlugQuery_allMarkdownRemark_edges_node | null;  // The item at the end of the edge
}

export interface PostBySlugQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: (PostBySlugQuery_allMarkdownRemark_edges | null)[] | null;  // A list of edges.
}

export interface PostBySlugQuery_markdownRemark_wordCount {
  __typename: "wordCount";
  words: number | null;
}

export interface PostBySlugQuery_markdownRemark_fields {
  __typename: "fields_2";
  slug: string | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_width1200 {
  __typename: "ImageSharpResolutions";
  height: number | null;
  src: string | null;
  width: number | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_width750 {
  __typename: "ImageSharpSizes";
  aspectRatio: number | null;
  base64: string | null;
  sizes: string | null;
  src: string | null;
  srcSet: string | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp {
  __typename: "ImageSharp";
  width1200: PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_width1200 | null;
  width750: PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_width750 | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image {
  __typename: "File";
  childImageSharp: PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp | null;  // The child of this node of type imageSharp
}

export interface PostBySlugQuery_markdownRemark_frontmatter {
  __typename: "frontmatter_2";
  title: string | null;
  date: string | null;
  dateRaw: Date | null;
  imageAttributionName: string | null;
  imageAttributionUrl: string | null;
  twitterId: string | null;
  draft: boolean | null;
  image: PostBySlugQuery_markdownRemark_frontmatter_image | null;
}

export interface PostBySlugQuery_markdownRemark {
  __typename: "MarkdownRemark";
  id: string;  // The id of this node.
  htmlAst: JSON | null;
  excerpt: string | null;
  wordCount: PostBySlugQuery_markdownRemark_wordCount | null;
  fields: PostBySlugQuery_markdownRemark_fields | null;
  frontmatter: PostBySlugQuery_markdownRemark_frontmatter | null;
}

export interface PostBySlugQuery {
  site: PostBySlugQuery_site | null;
  allMarkdownRemark: PostBySlugQuery_allMarkdownRemark | null;  // Connection to all MarkdownRemark nodes
  markdownRemark: PostBySlugQuery_markdownRemark | null;
}

export interface PostBySlugQueryVariables {
  slug: string;
}

//==============================================================
// START Enums and Input Objects
// All enums and input objects are included in every output file
// for now, but this will be changed soon.
// TODO: Link to issue to fix this.
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================