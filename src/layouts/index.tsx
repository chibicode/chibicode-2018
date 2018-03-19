import React from 'react'
import 'tachyons'
import 'typeface-roboto-mono'
import AppStyles from '../components/AppStyles'
import PageHeader from '../components/PageHeader'
// Links automatically get prefixed but if you want to compare
// location use this https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-link
// e.g. const isHomepage = location.pathname === withPrefix("/")
// import { withPrefix } from 'gatsby-link'

// TODO: App gets location and children() as params
const App = () => (
  <AppStyles>
    <PageHeader />
  </AppStyles>
)

export default App
