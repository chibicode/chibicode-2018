import React from 'react'
import styled from 'styled-components'
import Block, { BlockVSpacing, BlockWidth } from '../components/Block'
import HeaderLogo from '../components/HeaderLogo'
import { ATagNoUnderline } from '../components/InlineElements'
import IntroText from '../components/IntroText'
import { BREAKPOINT_NOT_SMALL } from '../constants/styles'
import twitterLogo from '../images/twitter-logo.svg'

const HeaderSection = styled.div`
  flex: 1;
`

const HeaderLogoSection = styled.div`
  max-width: 5rem;
  @media ${BREAKPOINT_NOT_SMALL} {
    max-width: 6rem;
  }
`

const LogoImage = styled.img`
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  position: relative;
  top: -1px;
`

const PageHeaderRight: React.SFC<{}> = () => (
  <ATagNoUnderline href="https://twitter.com/chibicode" className="dib">
    <LogoImage src={twitterLogo} alt="Twitter" /> Twitter
  </ATagNoUnderline>
)

const PageHeaderLeft: React.SFC<{}> = () => (
  <ATagNoUnderline href="https://chibicode.com/jp" className="dib">
    🇯🇵 日本語
  </ATagNoUnderline>
)

interface Props {
  shortIntroText: boolean
}

const PageHeader: React.SFC<Props> = ({ shortIntroText }) => (
  <div>
    <Block
      reactType="section"
      width={BlockWidth.Large}
      vSpacing={BlockVSpacing.Medium}
      className="flex items-start"
    >
      <HeaderSection className="flex justify-center">
        <div className="mr-auto">
          <PageHeaderLeft />
        </div>
      </HeaderSection>
      <HeaderSection className="flex justify-center">
        <HeaderLogoSection>
          <HeaderLogo />
        </HeaderLogoSection>
      </HeaderSection>
      <HeaderSection className="flex justify-center">
        <div className="ml-auto">
          <PageHeaderRight />
        </div>
      </HeaderSection>
    </Block>
    <IntroText detailed={!shortIntroText} />
  </div>
)

export default PageHeader
