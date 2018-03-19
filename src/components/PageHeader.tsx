import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Logo from '../components/Logo'
import PageHeaderLeft from '../components/PageHeaderLeft'
import PageHeaderRight from '../components/PageHeaderRight'

const HeaderSection = styled.div`
  flex: 1;
`

const HeaderLogoSection = styled.div`
  max-width: 6rem;
`

const PageHeader: React.SFC<{}> = () => (
  <Container className="flex mt4 items-center">
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
)

export default PageHeader
