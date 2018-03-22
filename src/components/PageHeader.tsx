import React from 'react'
import styled from 'styled-components'
import Block, { BlockVSpacing, BlockWidth } from '../components/Block'
import IntroText from '../components/IntroText'
import Logo from '../components/Logo'

const HeaderSection = styled.div`
  flex: 1;
`

const HeaderLogoSection = styled.div`
  max-width: 6rem;
`

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

const PageHeaderLeft: React.SFC<{}> = () => (
  <div>
    🇯🇵{' '}
    <UnderlineOnHoverLink href="https://chibicode.com/jp">
      日本語
    </UnderlineOnHoverLink>
  </div>
)

interface Props {
  showIntroText: boolean
}

const PageHeader: React.SFC<Props> = ({ showIntroText }) => (
  <div>
    <Block
      reactType="section"
      width={BlockWidth.Large}
      vSpacing={BlockVSpacing.Medium}
      className="flex items-center"
    >
      <HeaderSection className="flex justify-center">
        <div className="mr-auto">
          <PageHeaderLeft />
        </div>
      </HeaderSection>
      <HeaderSection className="flex justify-center">
        <HeaderLogoSection>
          <Logo />
        </HeaderLogoSection>
      </HeaderSection>
      <HeaderSection className="flex justify-center">
        <div className="ml-auto">
          <PageHeaderRight />
        </div>
      </HeaderSection>
    </Block>
    {showIntroText && <IntroText />}
  </div>
)

export default PageHeader
