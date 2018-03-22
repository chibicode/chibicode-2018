import classNames from 'classnames'
import React from 'react'

export enum BlockWidth {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum BlockVSpacing {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  width?: BlockWidth
  reactType: React.ReactType
  vSpacing?: BlockVSpacing
}

const Block: React.SFC<Props> = ({
  reactType,
  vSpacing,
  width,
  className,
  ...props
}) =>
  React.createElement(reactType, {
    className: classNames(
      'center mt0',
      {
        mb2: vSpacing === BlockVSpacing.XSmall,
        mb3: vSpacing === BlockVSpacing.Small,
        mb4: vSpacing === BlockVSpacing.Medium,
        mb5: vSpacing === BlockVSpacing.Large,
        mw6: width === BlockWidth.Small,
        mw7: width === BlockWidth.Medium,
        mw8: width === BlockWidth.Large,
      },
      className
    ),
    ...props,
  })

export default Block
