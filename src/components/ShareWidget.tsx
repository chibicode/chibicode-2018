import React from 'react'
import styled from 'styled-components'
import { BlockTopSpacing } from '../components/Block'
import { BlockTag, H2Tag } from '../components/BlockElements'
import { ATag } from '../components/InlineElements'
import TwitterEmbed from '../components/TwitterEmbed'
import {
  COLOR_YELLOW,
  COLOR_YELLOW_SEMI_TRANSPARENT_10,
} from '../constants/styles'

export interface ShareWidgetProps {
  twitterId?: string | null
  slug: string
}

const ShareLinkBg = styled.div`
  background-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_10};
  border: 1px solid ${COLOR_YELLOW};
`

const noOp: React.MouseEventHandler<HTMLAnchorElement> = e => {
  e.preventDefault()
}

export const ShareLinkATag = styled.a`
  color: inherit;
`

const ShareWidget: React.SFC<ShareWidgetProps> = ({ twitterId, slug }) => {
  const link = (
    <BlockTag
      className="f6"
      reactType={'div'}
      topSpacing={BlockTopSpacing.Small}
    >
      <div className="flex items-center">
        <strong className="mr1">Share Link:</strong>
        <ShareLinkBg className="ph2 pv2 br2">
          <ShareLinkATag
            className="flex-auto"
            onClick={noOp}
            href={slug}
          >{`https://chibicode.com${slug}`}</ShareLinkATag>
        </ShareLinkBg>
      </div>
    </BlockTag>
  )

  return (
    <div>
      <H2Tag>Share this article</H2Tag>
      {twitterId && <TwitterEmbed twitterId={twitterId} />}
      {link}
    </div>
  )
}

export default ShareWidget
