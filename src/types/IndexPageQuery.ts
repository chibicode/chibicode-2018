

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_site_siteMetadata {
  __typename: "siteMetadata_2";
  title: string | null;
  siteUrl: string | null;
  description: string | null;
}

export interface IndexPageQuery_site {
  __typename: "Site";
  siteMetadata: IndexPageQuery_site_siteMetadata | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_fields {
  __typename: "fields_2";
  slug: string | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1200 {
  __typename: "ImageSharpFixed";
  height: number | null;
  src: string | null;
  width: number | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1000 {
  __typename: "ImageSharpFluid";
  aspectRatio: number | null;
  base64: string | null;
  sizes: string | null;
  src: string | null;
  srcSet: string | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp {
  __typename: "ImageSharp";
  width1200: IndexPageQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1200 | null;
  width1000: IndexPageQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp_width1000 | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_frontmatter_image {
  __typename: "File";
  childImageSharp: IndexPageQuery_allMarkdownRemark_edges_node_frontmatter_image_childImageSharp | null;  // The child of this node of type imageSharp
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "frontmatter_2";
  date: any | null;
  draft: boolean | null;
  title: string | null;
  tags: (string | null)[] | null;
  imageAttributionName: string | null;
  imageAttributionUrl: string | null;
  twitterId: string | null;
  image: IndexPageQuery_allMarkdownRemark_edges_node_frontmatter_image | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  htmlAst: any | null;
  excerpt: string | null;
  fields: IndexPageQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: IndexPageQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: IndexPageQuery_allMarkdownRemark_edges_node | null;  // The item at the end of the edge
}

export interface IndexPageQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: (IndexPageQuery_allMarkdownRemark_edges | null)[] | null;  // A list of edges.
}

export interface IndexPageQuery {
  site: IndexPageQuery_site | null;
  allMarkdownRemark: IndexPageQuery_allMarkdownRemark | null;  // Connection to all MarkdownRemark nodes
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================