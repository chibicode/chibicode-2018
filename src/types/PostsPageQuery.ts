

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsPageQuery
// ====================================================

export interface PostsPageQuery_site_siteMetadata {
  __typename: "siteMetadata_2";
  title: string | null;
  siteUrl: string | null;
  description: string | null;
}

export interface PostsPageQuery_site {
  __typename: "Site";
  siteMetadata: PostsPageQuery_site_siteMetadata | null;
}

export interface PostsPageQuery_allMarkdownRemark_edges_node_fields {
  __typename: "fields_2";
  slug: string | null;
}

export interface PostsPageQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "frontmatter_2";
  date: string | null;
  draft: boolean | null;
  title: string | null;
}

export interface PostsPageQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: PostsPageQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: PostsPageQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface PostsPageQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: PostsPageQuery_allMarkdownRemark_edges_node | null;  // The item at the end of the edge
}

export interface PostsPageQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: (PostsPageQuery_allMarkdownRemark_edges | null)[] | null;  // A list of edges.
}

export interface PostsPageQuery {
  site: PostsPageQuery_site | null;
  allMarkdownRemark: PostsPageQuery_allMarkdownRemark | null;  // Connection to all MarkdownRemark nodes
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