import { withPrefix } from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'
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
      <Helmet>
        <script>{`
          window.twttr = (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function(f) {
            t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));
        `}</script>
      </Helmet>
      <PageHeader isHomepage={isHomepage} />
      {children()}
    </AppStyles>
  )
}

export default App
