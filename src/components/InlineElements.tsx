import classNames from 'classnames'
import Link, { GatsbyLinkProps } from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'
import { COLOR_YELLOW } from '../constants/styles'

export const UnderlineLink = styled(Link)`
  color: inherit;
  &:hover,
  &:focus,
  &:active {
    background-color: ${COLOR_YELLOW};

    code {
      background-color: ${COLOR_YELLOW};
    }
  }
`

export const ATag = styled.a`
  color: inherit;
  &:hover,
  &:focus,
  &:active {
    background-color: ${COLOR_YELLOW};

    code {
      background-color: ${COLOR_YELLOW};
    }
  }
`

export const ATagNoUnderline: React.SFC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, ...props }) => (
  <ATag className={classNames('no-underline', className)} {...props} />
)

export const NoUnderlineLink: React.SFC<GatsbyLinkProps> = ({
  className,
  ...props
}) => (
  <UnderlineLink className={classNames('no-underline', className)} {...props} />
)
