import React from 'react'
import styled from 'styled-components'
import Block, { BlockBottomSpacing, BlockWidth } from '../components/Block'
import HeaderLogo from '../components/HeaderLogo'
import IntroText, { IntroTextVariation } from '../components/IntroText'

const HeaderSection = styled.div`
  flex: 1;
`

const HeaderLogoSection = styled.div`
  max-width: 6rem;
`

export enum PageHeaderLocation {
  Homepage = 'HomePage',
  PostPageTop = 'PostPageTop',
  PostPageSecondary = 'PostPageSecondary',
}

interface Props {
  location: PageHeaderLocation
}

const PageHeader: React.SFC<Props> = ({ location }) => (
  <div>
    <Block
      reactType="section"
      width={BlockWidth.Large}
      bottomSpacing={BlockBottomSpacing.Medium}
      className="flex items-start"
    >
      <HeaderSection className="flex justify-center">
        <HeaderLogoSection>
          <HeaderLogo
            showAlternativeLogo={location === PageHeaderLocation.PostPageTop}
          />
        </HeaderLogoSection>
      </HeaderSection>
    </Block>
    <IntroText
      variation={
        {
          [PageHeaderLocation.Homepage]: IntroTextVariation.NameAndBlog,
          [PageHeaderLocation.PostPageTop]: IntroTextVariation.NameOnly,
          [PageHeaderLocation.PostPageSecondary]: IntroTextVariation.BlogOnly,
        }[location]
      }
    />
  </div>
)

export default PageHeader
