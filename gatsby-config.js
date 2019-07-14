const tsconfig = require('./tsconfig.json')

module.exports = {
  siteMetadata: {
    title: 'Shu Uesugi',
    author: 'Shu Uesugi',
    description: "Shu Uesugi's Blog.",
    siteUrl: 'https://2018.chibicode.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-katex',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-32987822-24',
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        transpileOnly: true,
        compilerOptions: tsconfig.compilerOptions,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://2018.chibicode.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://2018.chibicode.com',
        sitemap: 'https://2018.chibicode.com/sitemap.xml',
        policy: [
          { userAgent: 'ia_archiver', disallow: '/' },
          { userAgent: 'Megalodon', disallow: '/' },
        ],
      },
    },
  ],
}
