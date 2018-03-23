import React from 'react'
import styled from 'styled-components'
import Block, {
  BlockTopSpacing,
  BlockVSpacing,
  BlockWidth,
} from '../components/Block'

interface Props extends React.HTMLAttributes<HTMLElement> {
  reactType: React.ReactType
  vSpacing?: BlockVSpacing
  topSpacing?: BlockTopSpacing
}

export const StandardTag: React.SFC<Props> = ({
  reactType,
  vSpacing,
  topSpacing,
  ...props
}) => (
  <Block
    reactType={reactType}
    vSpacing={vSpacing || BlockVSpacing.Small}
    topSpacing={topSpacing}
    width={BlockWidth.Small}
    {...props}
  />
)

export const PTag: React.SFC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  ...props
}) => <StandardTag reactType={'p'} {...props} />

const StyledOlTag = styled.ol`
  padding-left: 1.5em;
`

export const OlTag: React.SFC<React.HTMLAttributes<HTMLOListElement>> = ({
  ...props
}) => <StandardTag reactType={StyledOlTag} {...props} />

const StyledUlTag = styled.ul`
  padding-left: 1.5em;
`

export const UlTag: React.SFC<React.HTMLAttributes<HTMLUListElement>> = ({
  ...props
}) => <StandardTag reactType={StyledUlTag} {...props} />

export const LiTag: React.SFC<React.HTMLAttributes<HTMLLIElement>> = ({
  ...props
}) => (
  <StandardTag reactType={'li'} vSpacing={BlockVSpacing.XSmall} {...props} />
)

export const H1Tag: React.SFC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => <StandardTag reactType={'h1'} className="f2 lh-title" {...props} />

export const H2Tag: React.SFC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => (
  <StandardTag
    reactType={'h2'}
    className="f3 lh-title"
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const H3Tag: React.SFC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => (
  <StandardTag
    reactType={'h3'}
    className="f4 lh-title"
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const H4Tag: React.SFC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => (
  <StandardTag
    reactType={'h4'}
    className="f5 lh-title"
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const H5Tag: React.SFC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => (
  <StandardTag
    reactType={'h5'}
    className="f5 lh-title"
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const H6Tag: React.SFC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => (
  <StandardTag
    reactType={'h6'}
    className="f5 lh-title"
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const FigureTag: React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => (
  <StandardTag
    reactType={'figure'}
    className="mr0 ml0"
    topSpacing={BlockTopSpacing.None}
    {...props}
  />
)
