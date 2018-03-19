import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: React.ReactNode
}

const AppStyles: React.SFC<Props> = ({ className, children }) => (
  <div className={classNames('lh-copy dark-gray', className)}>{children}</div>
)

const StyledAppStyles = styled(AppStyles)`
  font-family: 'Roboto Mono', monospace;

  a {
    color: inherit;
  }
`

export default StyledAppStyles
