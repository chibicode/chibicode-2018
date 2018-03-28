import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'
import Block, {
  BlockBottomSpacing,
  BlockTopSpacing,
  BlockWidth,
} from '../components/Block'
import TwitterEmbed from '../components/TwitterEmbed'
import {
  COLOR_YELLOW,
  COLOR_YELLOW_SEMI_TRANSPARENT_10,
  COLOR_YELLOW_SEMI_TRANSPARENT_30,
  COLOR_YELLOW_SEMI_TRANSPARENT_50,
} from '../constants/styles'

interface BlockTagProps extends Props {
  reactType: React.ReactType
}

interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
  bottomSpacing?: BlockBottomSpacing
  topSpacing?: BlockTopSpacing
  width?: BlockWidth
}

export const BlockTag: React.SFC<BlockTagProps> = ({
  reactType,
  bottomSpacing,
  topSpacing,
  width,
  ...props
}) => (
  <Block
    reactType={reactType}
    bottomSpacing={bottomSpacing || BlockBottomSpacing.Small}
    topSpacing={topSpacing || BlockTopSpacing.None}
    width={width || BlockWidth.Small}
    {...props}
  />
)

export const PTag: React.SFC<Props> = ({ ...props }) => (
  <BlockTag reactType={'p'} {...props} />
)

const StyledOlTag = styled.ol`
  padding-left: 1.5em;
`

export const OlTag: React.SFC<Props> = ({ ...props }) => (
  <BlockTag reactType={StyledOlTag} {...props} />
)

const StyledUlTag = styled.ul`
  padding-left: 1.5em;
`

export const UlTag: React.SFC<Props> = ({ ...props }) => (
  <BlockTag reactType={StyledUlTag} {...props} />
)

export const LiTag: React.SFC<Props> = ({ ...props }) => (
  <BlockTag
    reactType={'li'}
    bottomSpacing={BlockBottomSpacing.XSmall}
    {...props}
  />
)

export const H1Tag: React.SFC<Props> = ({ className, ...props }) => (
  <BlockTag
    reactType={'h1'}
    className={classNames('f3 lh-title fw6', className)}
    {...props}
  />
)

export const H2Tag: React.SFC<Props> = ({ className, ...props }) => (
  <BlockTag
    reactType={'h2'}
    className={classNames('f4 lh-title pt3 fw6', className)}
    topSpacing={BlockTopSpacing.Medium}
    bottomSpacing={BlockBottomSpacing.XSmall}
    {...props}
  />
)

export const H3Tag: React.SFC<Props> = ({ className, ...props }) => (
  <BlockTag
    reactType={'h3'}
    className={classNames('f5 lh-title fw6', className)}
    topSpacing={BlockTopSpacing.Medium}
    bottomSpacing={BlockBottomSpacing.XSmall}
    {...props}
  />
)

export const H4Tag: React.SFC<Props> = ({ className, ...props }) => (
  <BlockTag
    reactType={'h4'}
    className={classNames('f5 lh-title fw6', className)}
    topSpacing={BlockTopSpacing.Medium}
    bottomSpacing={BlockBottomSpacing.XSmall}
    {...props}
  />
)

export const H5Tag: React.SFC<Props> = ({ className, ...props }) => (
  <BlockTag
    reactType={'h5'}
    className={classNames('f5 lh-title fw6', className)}
    topSpacing={BlockTopSpacing.Medium}
    bottomSpacing={BlockBottomSpacing.XSmall}
    {...props}
  />
)

export const H6Tag: React.SFC<Props> = ({ className, ...props }) => (
  <BlockTag
    reactType={'h6'}
    className={classNames('f5 lh-title fw6', className)}
    topSpacing={BlockTopSpacing.Medium}
    bottomSpacing={BlockBottomSpacing.XSmall}
    {...props}
  />
)

export const FigureTag: React.SFC<Props> = ({ className, ...props }) => (
  <BlockTag
    reactType={'figure'}
    className={classNames('mr0 ml0', className)}
    topSpacing={BlockTopSpacing.None}
    {...props}
  />
)

export const FigcaptionTag: React.SFC<Props> = ({ className, ...props }) => (
  <BlockTag
    reactType={'figcaption'}
    className={classNames('silver f7', className)}
    topSpacing={BlockTopSpacing.XSmall}
    {...props}
  />
)

const StyledBlockquoteTag = styled.blockquote`
  border-left-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_50};
`

export const BlockquoteTag: React.SFC<Props> = ({
  className,
  children,
  ...props
}) => (
  <BlockTag
    reactType={'div'}
    className={classNames('bl bw1 b--silver i', className)}
    {...props}
  >
    <StyledBlockquoteTag className="mh0 pl3 bl bw3">
      {children}
    </StyledBlockquoteTag>
  </BlockTag>
)

const PreWrapper = styled.div`
  /* https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/ */
  .gatsby-highlight-code-line {
    background-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_30}; /* Modified */
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
    line-height: 2.25; /* Modified - seems this must be (line height)^2 */
  }

  .gatsby-highlight-inner {
    background-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_10}; /* Modified */
    border-radius: 0.3em;
    border: 1px solid ${COLOR_YELLOW};
    padding: 1em 0.85em; /* Modified - not sure why 0.85em */
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .gatsby-highlight-inner pre {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }

  .gatsby-highlight-inner code {
    background-color: transparent;
  }
`

export const PreTag: React.SFC<Props> = ({ ...props }) => (
  <BlockTag reactType={'div'} width={BlockWidth.Medium}>
    <PreWrapper>
      <div className="gatsby-highlight-inner">
        <pre {...props} />
      </div>
    </PreWrapper>
  </BlockTag>
)

interface TwitterEmbedWrapperProps {
  id: string
}

export const TwitterEmbedWrapper: React.SFC<TwitterEmbedWrapperProps> = ({
  id,
}) => <TwitterEmbed twitterId={id} />

interface HrTagProps extends Props {
  useSpan: boolean
}

// NOTE: useSpan avoids validateDOMNesting(...):
// <hr> cannot appear as a descendant of <p>.
export const HrTag: React.SFC<HrTagProps> = ({
  useSpan,
  className,
  ...props
}) => {
  const hrClassName = classNames(
    'db w-30 bt bb-0 b--moon-gray mr-auto ml-auto',
    className
  )
  return (
    <BlockTag
      reactType={useSpan ? 'span' : 'div'}
      className="db"
      topSpacing={BlockTopSpacing.Medium}
      bottomSpacing={BlockBottomSpacing.Medium}
    >
      {useSpan ? (
        <span className={hrClassName} {...props} />
      ) : (
        <hr className={hrClassName} {...props} />
      )}
    </BlockTag>
  )
}

HrTag.defaultProps = {
  useSpan: false,
}
