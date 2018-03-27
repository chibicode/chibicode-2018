import Link from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'
import { H1Tag, PTag, BlockTag } from '../components/BlockElements'
import PostTopBorder from '../components/PostTopBorder'

const NotFoundPage: React.SFC<{}> = () => (
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
)

export default NotFoundPage
