import React from 'react'
import styled from 'styled-components'
import UnderlineOnHoverLink from '../components/UnderlineOnHoverLink'
import twitterLogo from '../images/twitter-logo.svg'

const LogoImage = styled.img`
  width: 2em;
  height: 2em;
  vertical-align: middle;
  position: relative;
  top: -1px;
`

const PageHeaderRight: React.SFC<{}> = () => (
  <UnderlineOnHoverLink href="https://twitter.com/chibicode">
    <LogoImage src={twitterLogo} alt="Twitter" />@chibicode
  </UnderlineOnHoverLink>
)

export default PageHeaderRight
