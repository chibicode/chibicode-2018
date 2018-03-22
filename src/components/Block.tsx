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

export enum BlockTopSpacing {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  width?: BlockWidth
  reactType: React.ReactType
  vSpacing?: BlockVSpacing
  topSpacing?: BlockTopSpacing
}

const Block: React.SFC<Props> = ({
  reactType,
  vSpacing,
  topSpacing,
  width,
  className,
  ...props
}) =>
  React.createElement(reactType, {
    className: classNames(
      'center',
      {
        mb2: vSpacing === BlockVSpacing.XSmall,
        mb3: vSpacing === BlockVSpacing.Small,
        mb4: vSpacing === BlockVSpacing.Medium,
        mb5: vSpacing === BlockVSpacing.Large,
        mt0: !topSpacing,
        mt3: topSpacing === BlockTopSpacing.Small,
        mt4: topSpacing === BlockTopSpacing.Medium,
        mt5: topSpacing === BlockTopSpacing.Large,
        mw6: width === BlockWidth.Small,
        mw7: width === BlockWidth.Medium,
        mw8: width === BlockWidth.Large,
      },
      className
    ),
    ...props,
  })

export default Block
