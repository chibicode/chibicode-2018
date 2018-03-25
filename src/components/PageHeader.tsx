import React from 'react'
import styled from 'styled-components'
import Block, { BlockBottomSpacing, BlockWidth } from '../components/Block'
import HeaderLogo from '../components/HeaderLogo'
import IntroText from '../components/IntroText'

const HeaderSection = styled.div`
  flex: 1;
`

const HeaderLogoSection = styled.div`
  max-width: 6rem;
`

interface Props {
  isHomepage: boolean
}

const PageHeader: React.SFC<Props> = ({ isHomepage }) => (
  <div>
    <Block
      reactType="section"
      width={BlockWidth.Large}
      bottomSpacing={BlockBottomSpacing.Medium}
      className="flex items-start"
    >
      <HeaderSection className="flex justify-center">
        <HeaderLogoSection>
          <HeaderLogo showAlternativeLogo={!isHomepage} />
        </HeaderLogoSection>
      </HeaderSection>
    </Block>
    <IntroText detailed={isHomepage} />
  </div>
)

export default PageHeader
