import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'
import Block, {
  BlockTopSpacing,
  BlockVSpacing,
  BlockWidth,
} from '../components/Block'
import shuUesugi from '../images/shu-uesugi.svg'

const FooterLogo: React.SFC<{}> = () => (
  <Link to="/posts/about">
    <img src={shuUesugi} alt="Shu Uesugi" className="db" />
  </Link>
)

const FooterSection = styled.div`
  flex: 1;
`

const FooterLogoSection = styled.div`
  max-width: 6rem;
`

const PageFooter: React.SFC<{}> = () => (
  <Block
    reactType="section"
    width={BlockWidth.Large}
    topSpacing={BlockTopSpacing.Large}
    vSpacing={BlockVSpacing.Small}
    className="flex items-start"
  >
    <FooterSection className="flex justify-center">
      <FooterLogoSection>
        <FooterLogo />
      </FooterLogoSection>
    </FooterSection>
  </Block>
)

export default PageFooter
