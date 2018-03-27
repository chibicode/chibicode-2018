import classNames from 'classnames'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import {
  BREAKPOINT_NOT_SMALL,
  COLOR_CLASS_DARK_GRAY,
  COLOR_YELLOW_SEMI_TRANSPARENT_30,
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
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'avenir next',
    avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
    sans-serif;

  strong {
    font-weight: 600;
  }

  input,
  textarea,
  button,
  select {
    font-family: inherit;
  }

  code {
    font-size: 0.85em;
    background-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_30};
  }

  pre {
    font-size: 0.95em;
  }

  pre,
  code {
    font-family: 'IBM Plex Mono', SFMono-Regular, 'Menlo', 'DejaVu Sans Mono',
      'Bitstream Vera Sans Mono', Courier, monospace;
  }
`

const AppStyles: React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <Styled
    className={classNames(
      `lh-copy ${COLOR_CLASS_DARK_GRAY} pt4 pb5 ph4-ns ph3`,
      className
    )}
    {...props}
  />
)

export default AppStyles
