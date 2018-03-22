

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_site_siteMetadata {
  __typename: "siteMetadata_2";
  title: string | null;
}

export interface IndexPageQuery_site {
  __typename: "Site";
  siteMetadata: IndexPageQuery_site_siteMetadata | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_fields {
  __typename: "fields_2";
  slug: string | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "frontmatter_2";
  date: string | null;
  title: string | null;
}

export interface IndexPageQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  htmlAst: JSON | null;
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

//==============================================================
// START Enums and Input Objects
// All enums and input objects are included in every output file
// for now, but this will be changed soon.
// TODO: Link to issue to fix this.
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================