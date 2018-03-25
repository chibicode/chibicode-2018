import classNames from 'classnames'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import {
  BREAKPOINT_NOT_SMALL,
  COLOR_CLASS_DARK_GRAY,
} from '../constants/styles'

// tslint:disable-next-line
injectGlobal`
  @media ${BREAKPOINT_NOT_SMALL} {
    html {
      font-size: 18px;
    }
  }
`

const Styled = styled.div`
  font-family: 'Lato', sans-serif;

  input,
  textarea,
  button,
  select {
    font-family: inherit;
  }
`

const AppStyles: React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <Styled
    className={classNames(
      `lh-copy sans-serif ${COLOR_CLASS_DARK_GRAY} pt4 pb5 ph4-ns ph3`,
      className
    )}
    {...props}
  />
)

export default AppStyles
