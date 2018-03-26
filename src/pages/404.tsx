import Link from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'
import { H1Tag, PTag, StandardTag } from '../components/BlockElements'
import PostTopBorder from '../components/PostTopBorder'
import ogImage from '../images/og-image.jpg'

const NotFoundPage: React.SFC<{}> = () => (
  <main>
    <Helmet title={'404 Not Found'}>
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
    <StandardTag reactType={'div'} className="pt4">
      <PostTopBorder isRed />
      <H1Tag>Page Not Found</H1Tag>
      <PTag>
        <Link to="/">Go back to home page</Link>.
      </PTag>
    </StandardTag>
  </main>
)

export default NotFoundPage