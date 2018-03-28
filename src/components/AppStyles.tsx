import classNames from 'classnames'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import {
  BREAKPOINT_NOT_SMALL,
  COLOR_CLASS_DARK_GRAY,
  COLOR_DARK_GRAY,
  COLOR_YELLOW,
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
    color: ${COLOR_DARK_GRAY};
    background-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_30};
  }

  pre {
    font-size: 0.95em;
  }

  /* Override prism */
  & :not(pre) > code[class*='language-'] {
    padding: 0;
    border-radius: 0;
    background-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_30};
  }

  pre,
  code {
    font-family: 'IBM Plex Mono', SFMono-Regular, 'Menlo', 'DejaVu Sans Mono',
      'Bitstream Vera Sans Mono', Courier, monospace;
  }

  /* Default selection color for prism solarized theme is ugly. */
  /* Put these here b/c it also affects code tags in p tags.  */
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    background: ${COLOR_YELLOW};
    color: ${COLOR_DARK_GRAY};
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    background: ${COLOR_YELLOW};
    color: ${COLOR_DARK_GRAY};
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
