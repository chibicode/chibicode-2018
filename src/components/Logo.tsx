import React from 'react'
import { Link } from 'react-static'
import yellowLogo from '../images/yellow-logo.svg'

const Logo: React.SFC<{}> = () => (
  <Link to="/">
    <img src={yellowLogo} alt="Chibicode" />
  </Link>
)

export default Logo
