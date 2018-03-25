import { withPrefix } from 'gatsby-link'
import 'katex/dist/katex.min.css'
import React from 'react'
import 'tachyons'
import 'typeface-roboto-mono'
import AppStyles from '../components/AppStyles'
import PageHeader, { PageHeaderLocation } from '../components/PageHeader'

interface Props {
  location: Location
  children: () => React.ReactNode
}

const App: React.SFC<Props> = ({ location, children }) => {
  const isHomepage = location.pathname === withPrefix('/')
  return (
    <AppStyles>
      <PageHeader
        location={
          isHomepage
            ? PageHeaderLocation.Homepage
            : PageHeaderLocation.PostPageTop
        }
      />
      {children()}
    </AppStyles>
  )
}

export default App
