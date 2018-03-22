import React from 'react'
import styled from 'styled-components'
import Block, { BlockVSpacing, BlockWidth } from '../components/Block'
import HeaderLogo from '../components/HeaderLogo'
import { ATagNoUnderline } from '../components/InlineElements'
import IntroText from '../components/IntroText'
import twitterLogo from '../images/twitter-logo.svg'

const HeaderSection = styled.div`
  flex: 1;
`

const HeaderLogoSection = styled.div`
  max-width: 6rem;
`

const LogoImage = styled.img`
  width: 2em;
  height: 2em;
  vertical-align: middle;
  position: relative;
  top: -1px;
`

const PageHeaderRight: React.SFC<{}> = () => (
  <div>
    <LogoImage src={twitterLogo} alt="Twitter" />
    <ATagNoUnderline href="https://twitter.com/chibicode">
      @chibicode
    </ATagNoUnderline>
  </div>
)

const PageHeaderLeft: React.SFC<{}> = () => (
  <div>
    🇯🇵 <ATagNoUnderline href="https://chibicode.com/jp">日本語</ATagNoUnderline>
  </div>
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
