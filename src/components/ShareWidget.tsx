import React from 'react'
import styled from 'styled-components'
import { H2Tag, H3Tag } from '../components/BlockElements'
import TwitterEmbed from '../components/TwitterEmbed'
import { COLOR_YELLOW } from '../constants/styles'

interface UrlBoxProps {
  slug: string
}

const UrlBoxInput = styled.input`
  padding: 0.5rem;
  border-width: 0.05rem;
  &:focus {
    outline: none;
    padding: 0.2rem;
    border: 0.35rem solid ${COLOR_YELLOW};
  }
`

const urlBoxOnclick: React.MouseEventHandler<HTMLInputElement> = e =>
  (e.target as HTMLInputElement).select()

const UrlBox: React.SFC<UrlBoxProps> = ({ slug }) => (
  <UrlBoxInput
    type="text"
    readOnly
    onClick={urlBoxOnclick}
    value={`https://chibicode.com/${slug}`}
    className="f7 db w-100 ba b--moon-gray br2 b"
  />
)

export interface ShareWidgetProps {
  twitterId?: string | null
  slug: string
}

const ShareWidget: React.SFC<ShareWidgetProps> = ({ twitterId, slug }) => {
  const link = (
    <H3Tag className="flex items-center">
      <span className="mr2">Share Link:</span>
      <span className="flex-auto">
        <UrlBox slug={slug} />
      </span>
    </H3Tag>
  )

  return twitterId ? (
    <div>
      <H2Tag>Share or comment on Twitter</H2Tag>
      <TwitterEmbed twitterId={twitterId} addSpaceToTop={false} />
      {link}
    </div>
  ) : (
    link
  )
}

export default ShareWidget
