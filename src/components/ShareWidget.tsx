import React from 'react'
import styled from 'styled-components'
import { BlockTopSpacing } from '../components/Block'
import { BlockTag, H2Tag } from '../components/BlockElements'
import { UnderlineLink } from '../components/InlineElements'
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

const ShareWidget: React.SFC<ShareWidgetProps> = ({ twitterId, slug }) => {
  const link = (
    <BlockTag
      className="ph2 pv2 f6 br2"
      reactType={ShareLinkBg}
      topSpacing={BlockTopSpacing.Small}
    >
      <strong>Share Link:</strong>{' '}
      <UnderlineLink to={slug}>{`https://chibicode.com${slug}`}</UnderlineLink>
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
