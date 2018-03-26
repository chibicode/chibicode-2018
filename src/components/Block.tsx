import classNames from 'classnames'
import React from 'react'

export enum BlockWidth {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Full = 'Full',
}

export enum BlockBottomSpacing {
  None = 'None',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum BlockTopSpacing {
  None = 'None',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
  width?: BlockWidth
  reactType: React.ReactType
  bottomSpacing?: BlockBottomSpacing
  topSpacing?: BlockTopSpacing
}

const Block: React.SFC<Props> = ({
  reactType,
  bottomSpacing,
  topSpacing,
  width,
  className,
  ...props
}) =>
  React.createElement(reactType, {
    className: classNames(
      'center',
      {
        mb0: !bottomSpacing || bottomSpacing === BlockBottomSpacing.None,
        mb2: bottomSpacing === BlockBottomSpacing.XSmall,
        mb3: bottomSpacing === BlockBottomSpacing.Small,
        mb4: bottomSpacing === BlockBottomSpacing.Medium,
        mb5: bottomSpacing === BlockBottomSpacing.Large,
        mt0: !topSpacing || topSpacing === BlockTopSpacing.None,
        mt2: topSpacing === BlockTopSpacing.XSmall,
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
