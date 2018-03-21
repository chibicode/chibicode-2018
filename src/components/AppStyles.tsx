import classNames from 'classnames'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'

// tslint:disable-next-line
injectGlobal`
  @media screen and (min-width: 48em) {
    html {
      font-size: 18px;
    }
  }
`

const Styled = styled.div`
  font-family: 'Lato', sans-serif;

  a {
    color: inherit;
  }
`

const AppStyles: React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <Styled
    className={classNames('lh-copy sans-serif dark-gray', className)}
    {...props}
  />
)

export default AppStyles
