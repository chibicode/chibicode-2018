/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface IndexPageQuery {
  site:  {
    __typename: "Site",
    siteMetadata:  {
      __typename: "siteMetadata_2",
      title: string | null,
    } | null,
  } | null,
  // Connection to all MarkdownRemark nodes
  allMarkdownRemark:  {
    __typename: "MarkdownRemarkConnection",
    // A list of edges.
    edges:  Array< {
      __typename: "MarkdownRemarkEdge",
      // The item at the end of the edge
      node:  {
        __typename: "MarkdownRemark",
        excerpt: string | null,
        fields:  {
          __typename: "fields_2",
          slug: string | null,
        } | null,
        frontmatter:  {
          __typename: "frontmatter_2",
          date: string | null,
          title: string | null,
        } | null,
      } | null,
    } | null > | null,
  } | null,
};
