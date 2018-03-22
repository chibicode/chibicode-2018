

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

export interface PostBySlugQuery_markdownRemark_fields {
  __typename: "fields_2";
  slug: string | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_resolutions {
  __typename: "ImageSharpResolutions";
  height: number | null;
  src: string | null;
  width: number | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp {
  __typename: "ImageSharp";
  resolutions: PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp_resolutions | null;
}

export interface PostBySlugQuery_markdownRemark_frontmatter_image {
  __typename: "File";
  childImageSharp: PostBySlugQuery_markdownRemark_frontmatter_image_childImageSharp | null;  // The child of this node of type imageSharp
}

export interface PostBySlugQuery_markdownRemark_frontmatter {
  __typename: "frontmatter_2";
  title: string | null;
  date: string | null;
  image: PostBySlugQuery_markdownRemark_frontmatter_image | null;
}

export interface PostBySlugQuery_markdownRemark {
  __typename: "MarkdownRemark";
  id: string;  // The id of this node.
  htmlAst: JSON | null;
  fields: PostBySlugQuery_markdownRemark_fields | null;
  frontmatter: PostBySlugQuery_markdownRemark_frontmatter | null;
}

export interface PostBySlugQuery {
  site: PostBySlugQuery_site | null;
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