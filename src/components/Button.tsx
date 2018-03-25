import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'
import {
  COLOR_CLASS_DARK_GRAY,
  COLOR_RED,
  COLOR_YELLOW,
} from '../constants/styles'

const StyledButton = styled.button`
  background-color: ${COLOR_YELLOW};
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: ${COLOR_RED};
  }
`

const Button: React.SFC<React.HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => (
  <StyledButton
    className={classNames(
      `ba bw1 b--${COLOR_CLASS_DARK_GRAY} ph4 pv2 br2 b`,
      className
    )}
    {...props}
  />
)

export default Button
