import React from 'react'
import styled from 'styled-components'
import Block, { BlockVSpacing, BlockWidth } from '../components/Block'

interface Props extends React.HTMLAttributes<HTMLElement> {
  reactType: React.ReactType
  vSpacing?: BlockVSpacing
}

const StandardTag: React.SFC<Props> = ({ reactType, vSpacing, ...props }) => (
  <Block
    reactType={reactType}
    {...props}
    vSpacing={vSpacing || BlockVSpacing.Small}
    width={BlockWidth.Small}
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
