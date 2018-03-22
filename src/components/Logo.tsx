import Link from 'gatsby-link'
import React from 'react'
import yellowLogo from '../images/yellow-logo.svg'

const Logo: React.SFC<{}> = () => (
  <Link to="/">
    <img src={yellowLogo} alt="Chibicode" className="db" />
  </Link>
)

export default Logo
