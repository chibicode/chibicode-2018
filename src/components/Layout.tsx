import '@ibm/plex/css/ibm-plex.min.css'
import { withPrefix } from 'gatsby-link'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-solarizedlight.css'
import React from 'react'
import Helmet from 'react-helmet'
import 'tachyons'
import AppStyles from '../components/AppStyles'
import PageHeader, { PageHeaderLocation } from '../components/PageHeader'
import favicon152 from '../images/favicon-152.png'

interface Props {
  location: Location
  children: React.ReactNode
}

const Layout: React.SFC<Props> = ({ location, children }) => {
  const isHomepage =
    location.pathname === withPrefix('/') ||
    location.pathname === withPrefix('/posts/')
  return (
    <AppStyles>
      <Helmet>
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Shu Uesugi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chibicode" />
        <meta name="twitter:creator" content="@chibicode" />
        <link rel="apple-touch-icon-precomposed" href={favicon152} />
      </Helmet>
      <PageHeader
        location={
          isHomepage
            ? PageHeaderLocation.Homepage
            : PageHeaderLocation.PostPageTop
        }
      />
      {children}
    </AppStyles>
  )
}

export default Layout
