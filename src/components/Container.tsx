import classNames from 'classnames'
import React from 'react'

export enum Size {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size: Size
}

const Container: React.SFC<Props> = ({ size, className, ...props }) => (
  <section
    className={classNames(
      'ph3 center',
      {
        mw6: size === Size.Small,
        mw7: size === Size.Medium,
        mw8: size === Size.Large,
      },
      className
    )}
    {...props}
  />
)

export default Container
