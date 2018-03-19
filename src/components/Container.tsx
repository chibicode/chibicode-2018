import classNames from 'classnames'
import React from 'react'

const Container: React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <section className={classNames('mw8 ph3 center', className)} {...props} />

export default Container
