import { withPrefix } from 'gatsby-link'
import React from 'react'
import 'tachyons'
import 'typeface-roboto-mono'
import AppStyles from '../components/AppStyles'
import PageHeader from '../components/PageHeader'

interface Props {
  location: Location
  children: () => React.ReactNode
}

const App: React.SFC<Props> = ({ location, children }) => {
  const isHomepage = location.pathname === withPrefix('/')
  return (
    <AppStyles>
      <PageHeader isHomepage={isHomepage} />
      {children()}
    </AppStyles>
  )
}

export default App
