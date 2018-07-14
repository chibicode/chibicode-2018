

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

export interface PostBySlugQuery_allMarkdownRemark_edges_node_fields {
  __typename: "fields_2";
  slug: string | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1200 {
  __typename: "ImageSharpFixed";
  height: number | null;
  src: string | null;
  width: number | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1000 {
  __typename: "ImageSharpFluid";
  aspectRatio: number | null;
  base64: string | null;
  sizes: string | null;
  src: string | null;
  srcSet: string | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp {
  __typename: "ImageSharp";
  width1200: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1200 | null;
  width1000: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1000 | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image {
  __typename: "File";
  childImageSharp: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp | null;  // The child of this node of type imageSharp
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "frontmatter_2";
  date: any | null;
  title: string | null;
  draft: boolean | null;
  tags: (string | null)[] | null;
  imageAttributionName: string | null;
  imageAttributionUrl: string | null;
  twitterId: string | null;
  image: PostBySlugQuery_allMarkdownRemark_edges_node_frontmatter_image | null;
}

export interface PostBySlugQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  htmlAst: any | null;
  excerpt: string | null;
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

export interface PostBySlugQuery_markdownRemark_fields {
  __typename: "fields_2";
  slug: string | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_width1200 {
  __typename: "ImageSharpFixed";
  height: number | null;
  src: string | null;
  width: number | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_width1000 {
  __typename: "ImageSharpFluid";
  aspectRatio: number | null;
  base64: string | null;
  sizes: string | null;
  src: string | null;
  srcSet: string | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp {
  __typename: "ImageSharp";
  width1200: PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_width1200 | null;
  width1000: PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_width1000 | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image {
  __typename: "File";
  childImageSharp: PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp | null;  // The child of this node of type imageSharp
}

export interface PostBySlugQuery_markdownRemark_frontmatter {
  __typename: "frontmatter_2";
  title: string | null;
  date: any | null;
  dateRaw: any | null;
  imageAttributionName: string | null;
  imageAttributionUrl: string | null;
  twitterId: string | null;
  draft: boolean | null;
  tags: (string | null)[] | null;
  image: PostBySlugQuery_markdownRemark_frontmatter_image | null;
}

export interface PostBySlugQuery_markdownRemark {
  __typename: "MarkdownRemark";
  id: string;  // The id of this node.
  htmlAst: any | null;
  excerpt: string | null;
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

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================