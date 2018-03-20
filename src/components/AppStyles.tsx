import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  font-family: 'Roboto Mono', monospace;
  line-height: 1.6;

  a {
    color: inherit;
  }
`

const AppStyles: React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <Styled className={classNames('dark-gray', className)} {...props} />

export default AppStyles
