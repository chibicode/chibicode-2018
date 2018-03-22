import React from 'react'
import styled from 'styled-components'
import Block, { BlockVSpacing, BlockWidth } from '../components/Block'
import IntroText from '../components/IntroText'
import Logo from '../components/Logo'
import PageHeaderLeft from '../components/PageHeaderLeft'
import PageHeaderRight from '../components/PageHeaderRight'
import SectionBorder from '../components/SectionBorder'

const HeaderSection = styled.div`
  flex: 1;
`

const HeaderLogoSection = styled.div`
  max-width: 6rem;
`

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
    {showIntroText && (
      <div>
        <IntroText />
        <SectionBorder />
      </div>
    )}
  </div>
)

export default PageHeader
