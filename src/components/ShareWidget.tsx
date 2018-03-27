import React from 'react'
import styled from 'styled-components'
import { H2Tag, H3Tag } from '../components/BlockElements'
import TwitterEmbed from '../components/TwitterEmbed'
import { COLOR_DARK_GRAY } from '../constants/styles'

interface UrlBoxProps {
  slug: string
}

const UrlBoxInput = styled.input`
  padding: 0.5rem;
  border-width: 0.05rem;
  &:focus {
    outline: none;
    border-color: ${COLOR_DARK_GRAY};
  }
`

// Must use control component to make text selectable on mobile
const noOp = () => {
  return
}

// .setSelectionRange(0, 9999) wasn't working well on mobile
const urlBoxOnclick: React.MouseEventHandler<HTMLInputElement> = e =>
  (e.target as HTMLInputElement).select()

const UrlBox: React.SFC<UrlBoxProps> = ({ slug }) => (
  <UrlBoxInput
    type="text"
    onClick={urlBoxOnclick}
    value={`https://chibicode.com${slug}`}
    onChange={noOp}
    className="f7 db w-100 ba b--moon-gray br2 fw5"
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

  return (
    <div className="pt3">
      {twitterId ? (
        <div>
          <H2Tag>Share or comment on Twitter</H2Tag>
          <TwitterEmbed twitterId={twitterId} />
          {link}
        </div>
      ) : (
        link
      )}
    </div>
  )
}

export default ShareWidget
