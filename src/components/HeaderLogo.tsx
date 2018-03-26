import Link from 'gatsby-link'
import React from 'react'
import redLogo from '../images/red-logo.svg'
import yellowLogo from '../images/yellow-logo.svg'

interface Props {
  showAlternativeLogo: boolean
}

const HeaderLogo: React.SFC<Props> = ({ showAlternativeLogo }) => (
  <Link to="/">
    {showAlternativeLogo ? (
      <img src={redLogo} alt="Shu Uesugi" className="db" />
    ) : (
      <img src={yellowLogo} alt="Chibicode" className="db" />
    )}
  </Link>
)

HeaderLogo.defaultProps = {
  showAlternativeLogo: false,
}

export default HeaderLogo
