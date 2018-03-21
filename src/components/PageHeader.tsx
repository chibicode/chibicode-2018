import React from 'react'
import styled from 'styled-components'
import Container, { Size as ContainerSize } from '../components/Container'
import IntroText from '../components/IntroText'
import Logo from '../components/Logo'
import PageHeaderLeft from '../components/PageHeaderLeft'
import PageHeaderRight from '../components/PageHeaderRight'
import SectionBorder from '../components/SectionBorder'

const HeaderSection = styled.div`
  flex: 1;
`

const HeaderLogoSection = styled.div`
  max-width: 7rem;
`

interface Props {
  showIntroText: boolean
}

const PageHeader: React.SFC<Props> = ({ showIntroText }) => (
  <div>
    <Container size={ContainerSize.Large} className="flex mt4 mb4 items-center">
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
    </Container>
    {showIntroText && (
      <div>
        <IntroText />
        <SectionBorder />
      </div>
    )}
  </div>
)

export default PageHeader
