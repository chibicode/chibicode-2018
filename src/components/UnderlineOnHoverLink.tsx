import classNames from 'classnames'
import Link, { GatsbyLinkProps } from 'gatsby-link'
import React from 'react'

interface LinkPropsWithIsLink extends GatsbyLinkProps {
  isLink: true
}

interface AnchorElementPropsWithIsLink
  extends React.HTMLAttributes<HTMLAnchorElement> {
  isLink?: false
}

const commonClassNames = (className?: string) =>
  classNames('no-underline underline-hover', className)

const UnderlineOnHoverLink: React.SFC<
  LinkPropsWithIsLink | AnchorElementPropsWithIsLink
> = props => {
  if (props.isLink) {
    const { isLink, className, ...rest } = props
    return <Link className={commonClassNames(className)} {...rest} />
  } else {
    const { isLink, className, ...rest } = props
    return <a className={commonClassNames(className)} {...rest} />
  }
}

export default UnderlineOnHoverLink
