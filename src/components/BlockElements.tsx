import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'
import Block, {
  BlockBottomSpacing,
  BlockTopSpacing,
  BlockWidth,
} from '../components/Block'

interface StandardTagProps extends Props {
  reactType: React.ReactType
}

interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
  bottomSpacing?: BlockBottomSpacing
  topSpacing?: BlockTopSpacing
}

export const StandardTag: React.SFC<StandardTagProps> = ({
  reactType,
  bottomSpacing,
  topSpacing,
  ...props
}) => (
  <Block
    reactType={reactType}
    bottomSpacing={bottomSpacing || BlockBottomSpacing.Small}
    topSpacing={topSpacing}
    width={BlockWidth.Small}
    {...props}
  />
)

export const PTag: React.SFC<Props> = ({ ...props }) => (
  <StandardTag reactType={'p'} {...props} />
)

const StyledOlTag = styled.ol`
  padding-left: 1.5em;
`

export const OlTag: React.SFC<Props> = ({ ...props }) => (
  <StandardTag reactType={StyledOlTag} {...props} />
)

const StyledUlTag = styled.ul`
  padding-left: 1.5em;
`

export const UlTag: React.SFC<Props> = ({ ...props }) => (
  <StandardTag reactType={StyledUlTag} {...props} />
)

export const LiTag: React.SFC<Props> = ({ ...props }) => (
  <StandardTag
    reactType={'li'}
    bottomSpacing={BlockBottomSpacing.XSmall}
    {...props}
  />
)

export const H1Tag: React.SFC<Props> = ({ className, ...props }) => (
  <StandardTag
    reactType={'h1'}
    className={classNames('f3 lh-title', className)}
    {...props}
  />
)

export const H2Tag: React.SFC<Props> = ({ className, ...props }) => (
  <StandardTag
    reactType={'h2'}
    className={classNames('f4 lh-title', className)}
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const H3Tag: React.SFC<Props> = ({ className, ...props }) => (
  <StandardTag
    reactType={'h3'}
    className={classNames('f5 lh-title', className)}
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const H4Tag: React.SFC<Props> = ({ className, ...props }) => (
  <StandardTag
    reactType={'h4'}
    className={classNames('f5 lh-title', className)}
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const H5Tag: React.SFC<Props> = ({ className, ...props }) => (
  <StandardTag
    reactType={'h5'}
    className={classNames('f5 lh-title', className)}
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const H6Tag: React.SFC<Props> = ({ className, ...props }) => (
  <StandardTag
    reactType={'h6'}
    className={classNames('f5 lh-title', className)}
    topSpacing={BlockTopSpacing.Medium}
    {...props}
  />
)

export const FigureTag: React.SFC<Props> = ({ className, ...props }) => (
  <StandardTag
    reactType={'figure'}
    className={classNames('mr0 ml0', className)}
    topSpacing={BlockTopSpacing.None}
    {...props}
  />
)
