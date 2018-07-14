import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { BlockTag, H1Tag, PTag } from '../components/BlockElements'
import Layout from '../components/Layout'
import PostTopBorder from '../components/PostTopBorder'

const NotFoundPage: React.SFC<{ location: Location }> = ({ location }) => (
  <Layout location={location}>
    <main>
      <Helmet title={'404 Not Found'} />
      <BlockTag reactType={'div'} className="pt4">
        <PostTopBorder isRed />
        <H1Tag>Page Not Found</H1Tag>
        <PTag>
          <Link to="/">Go back to home page</Link>.
        </PTag>
      </BlockTag>
    </main>
  </Layout>
)

export default NotFoundPage
